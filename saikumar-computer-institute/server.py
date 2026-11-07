import os
import sys
import json
import sqlite3
import datetime
import random
from http.server import HTTPServer, SimpleHTTPRequestHandler
import urllib.parse

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "data", "institute.db")

os.makedirs(os.path.join(BASE_DIR, "data"), exist_ok=True)

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # 1. Registrations table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS registrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reg_number TEXT UNIQUE,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        mobile TEXT NOT NULL,
        address TEXT NOT NULL,
        state TEXT NOT NULL,
        district TEXT NOT NULL,
        qualification TEXT NOT NULL,
        interested_course TEXT NOT NULL,
        preferred_batch TEXT NOT NULL,
        training_mode TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)
    
    # 2. Enquiries table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS enquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        enq_number TEXT UNIQUE,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        mobile TEXT NOT NULL,
        course_interest TEXT,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)
    
    # 3. Reviews table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_name TEXT NOT NULL,
        course_name TEXT NOT NULL,
        location TEXT NOT NULL,
        rating INTEGER NOT NULL,
        batch_year TEXT NOT NULL,
        review_text TEXT NOT NULL,
        placement_role TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)
    
    # Seed default sample student reviews if table is empty
    cursor.execute("SELECT COUNT(*) FROM reviews")
    if cursor.fetchone()[0] == 0:
        sample_reviews = [
            ("Ravi Teja Reddy", "Full Stack Web Development", "Kurnool, AP", 5, "2025",
             "Joining Saikumar Computer Training Institute was the best career decision. Sai Kumar Sir's practical coaching and daily lab practice helped me master JavaScript, React, and Node.js. Today I am working as a Junior Software Engineer!", "Placed at Infosys (Junior Developer)"),
            
            ("Lakshmi Prasanna", "Tally Prime with GST", "Proddatur, YSR Kadapa", 5, "2025",
             "Excellent training for commerce students! The hands-on billing with GST calculations, e-Way bills, and real business balance sheets gave me immense confidence. Faculty is very patient and clears every doubt.", "Accounts Executive at Sri Balaji Enterprises"),
            
            ("K. Venkat Ramana", "Python Programming", "Kadapa, AP", 5, "2026",
             "Sai Kumar Computer Training Institute stands out for its 80% practical syllabus. Every single Python concept from OOPs to Data Analysis libraries was taught with live projects. Highly recommended in Andhra Pradesh!", "Data Associate at TechCorp"),
            
            ("Anitha Kumari", "Advanced Excel & MIS", "Vijayawada, AP", 5, "2025",
             "Learned VLOOKUP, XLOOKUP, Pivot Tables, Macros, and automated dashboards. The institute provides dedicated computer systems and flexible timing batches. The fees are extremely reasonable and worth every rupee.", "MIS Analyst"),
             
            ("S. Mahesh Babu", "Web Development", "Nandyal, AP", 5, "2026",
             "The web development course covered modern HTML5, CSS3, Flexbox, Grid, and JavaScript from scratch. Sir guided us personally to build responsive portfolio websites.", "Freelance Web Designer"),
             
            ("B. Divya Vani", "Computer Fundamentals & MS Office", "Kurnool, AP", 5, "2026",
             "I had zero computer knowledge before joining. The trainers started from basic keyboard typing and Windows OS up to advanced Word, PowerPoint presentations, and Excel formulas. Very supportive environment!", "Office Administrative Coordinator")
        ]
        cursor.executemany("""
            INSERT INTO reviews (student_name, course_name, location, rating, batch_year, review_text, placement_role)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, sample_reviews)
        print("Seeded sample student reviews.")

    conn.commit()
    conn.close()

class InstituteHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8')
        
        try:
            data = json.loads(post_data) if post_data else {}
        except Exception:
            data = urllib.parse.parse_qs(post_data)
            data = {k: v[0] if len(v) == 1 else v for k, v in data.items()}

        if parsed.path == "/api/register":
            self.handle_registration(data)
        elif parsed.path == "/api/enquiry":
            self.handle_enquiry(data)
        elif parsed.path == "/api/reviews":
            self.handle_add_review(data)
        else:
            self.send_error(404, "Endpoint Not Found")

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/reviews":
            self.handle_get_reviews()
        elif parsed.path == "/api/registrations":
            self.handle_get_registrations()
        elif parsed.path == "/api/enquiries":
            self.handle_get_enquiries()
        else:
            # Default to index.html if root
            if self.path in ["", "/"]:
                self.path = "/index.html"
            super().do_GET()

    def handle_registration(self, data):
        # Validate required fields
        required = ["full_name", "email", "mobile", "address", "state", "district", "qualification", "interested_course", "preferred_batch"]
        missing = [f for f in required if not data.get(f)]
        if missing:
            self.send_json_response({"success": False, "message": f"Missing required fields: {', '.join(missing)}"}, 400)
            return
            
        mobile = str(data.get("mobile", "")).strip()
        # Clean mobile: remove +91 or spaces
        clean_mobile = mobile.replace("+91", "").replace(" ", "").replace("-", "")
        if not (clean_mobile.isdigit() and len(clean_mobile) == 10):
            self.send_json_response({"success": False, "message": "Please enter a valid 10-digit Indian mobile number."}, 400)
            return

        reg_num = f"SK-{datetime.datetime.now().year}-{random.randint(1000, 9999)}"
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO registrations (reg_number, full_name, email, mobile, address, state, district, qualification, interested_course, preferred_batch, training_mode)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            reg_num,
            data.get("full_name").strip(),
            data.get("email").strip(),
            clean_mobile,
            data.get("address").strip(),
            data.get("state", "Andhra Pradesh").strip(),
            data.get("district").strip(),
            data.get("qualification").strip(),
            data.get("interested_course").strip(),
            data.get("preferred_batch").strip(),
            data.get("training_mode", "Classroom Lab Training").strip()
        ))
        conn.commit()
        conn.close()

        self.send_json_response({
            "success": True,
            "regNumber": reg_num,
            "message": "Student registration completed successfully! Our counselor will contact you shortly.",
            "data": {
                "name": data.get("full_name"),
                "course": data.get("interested_course"),
                "batch": data.get("preferred_batch"),
                "mobile": clean_mobile,
                "regNumber": reg_num
            }
        }, 201)

    def handle_enquiry(self, data):
        name = data.get("full_name", "").strip()
        mobile = data.get("mobile", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()
        
        if not name or not mobile or not message:
            self.send_json_response({"success": False, "message": "Please provide your Name, Mobile Number, and Enquiry message."}, 400)
            return

        enq_num = f"ENQ-{random.randint(10000, 99999)}"
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO enquiries (enq_number, full_name, email, mobile, course_interest, subject, message)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            enq_num,
            name,
            email,
            mobile,
            data.get("course_interest", "General Enquiry"),
            data.get("subject", "Course Information"),
            message
        ))
        conn.commit()
        conn.close()

        self.send_json_response({
            "success": True,
            "enquiryId": enq_num,
            "message": "Thank you for contacting Saikumar Computer Training Institute! We have received your enquiry and will call you back within 2 business hours."
        }, 201)

    def handle_get_reviews(self):
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, student_name, course_name, location, rating, batch_year, review_text, placement_role, created_at
            FROM reviews ORDER BY id DESC
        """)
        rows = cursor.fetchall()
        conn.close()
        
        reviews = []
        for r in rows:
            reviews.append({
                "id": r[0],
                "student_name": r[1],
                "course_name": r[2],
                "location": r[3],
                "rating": r[4],
                "batch_year": r[5],
                "review_text": r[6],
                "placement_role": r[7],
                "created_at": r[8]
            })
        self.send_json_response({"success": True, "reviews": reviews})

    def handle_add_review(self, data):
        name = data.get("student_name", "").strip()
        course = data.get("course_name", "").strip()
        location = data.get("location", "Andhra Pradesh").strip()
        rating = int(data.get("rating", 5))
        review_text = data.get("review_text", "").strip()
        placement = data.get("placement_role", "Certified Student").strip()

        if not name or not course or not review_text:
            self.send_json_response({"success": False, "message": "Name, Course and Review details are required."}, 400)
            return

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO reviews (student_name, course_name, location, rating, batch_year, review_text, placement_role)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (name, course, location, rating, str(datetime.datetime.now().year), review_text, placement))
        conn.commit()
        conn.close()

        self.send_json_response({"success": True, "message": "Thank you! Your review has been added to our institute wall."}, 201)

    def handle_get_registrations(self):
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT id, reg_number, full_name, email, mobile, district, interested_course, preferred_batch, training_mode, created_at FROM registrations ORDER BY id DESC")
        rows = cursor.fetchall()
        conn.close()
        results = [{"id": r[0], "regNumber": r[1], "name": r[2], "email": r[3], "mobile": r[4], "district": r[5], "course": r[6], "batch": r[7], "mode": r[8], "date": r[9]} for r in rows]
        self.send_json_response({"success": True, "registrations": results})

    def handle_get_enquiries(self):
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT id, enq_number, full_name, email, mobile, course_interest, message, created_at FROM enquiries ORDER BY id DESC")
        rows = cursor.fetchall()
        conn.close()
        results = [{"id": r[0], "enqNumber": r[1], "name": r[2], "email": r[3], "mobile": r[4], "course": r[5], "message": r[6], "date": r[7]} for r in rows]
        self.send_json_response({"success": True, "enquiries": results})

    def send_json_response(self, payload, status=200):
        body = json.dumps(payload).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

def run_server():
    init_db()
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, InstituteHandler)
    print(f"============================================================")
    print(f" SAIKUMAR COMPUTER TRAINING INSTITUTE - OFFICIAL WEB SERVER ")
    print(f"============================================================")
    print(f" Server running at: http://localhost:{PORT}")
    print(f" Database connected: {DB_PATH}")
    print(f" Serving directory: {BASE_DIR}")
    print(f" Press Ctrl+C to terminate.")
    print(f"============================================================")
    httpd.serve_forever()

if __name__ == "__main__":
    run_server()
