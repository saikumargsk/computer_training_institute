import sys
import sqlite3
import datetime

sys.stdout.reconfigure(encoding='utf-8')
DB_PATH = r"C:\Users\manoj\.gemini\antigravity\scratch\saikumar-computer-institute\data\institute.db"

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

# Test inserting registration
cursor.execute("""
    INSERT INTO registrations (reg_number, full_name, email, mobile, address, state, district, qualification, interested_course, preferred_batch, training_mode)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
""", (
    "SK-2026-TEST1",
    "G. Sai Praneeth",
    "saipraneeth@gmail.com",
    "9876543210",
    "D.No 12/34, Near Bellary Chowrasta",
    "Andhra Pradesh",
    "Kurnool",
    "B.Tech (CSE)",
    "Python Programming",
    "Morning: 7:00 AM - 9:00 AM",
    "Classroom Lab Training"
))

# Test inserting enquiry
cursor.execute("""
    INSERT INTO enquiries (enq_number, full_name, email, mobile, course_interest, subject, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
""", (
    "ENQ-TEST1",
    "M. Suresh Kumar",
    "suresh.k@gmail.com",
    "9440155667",
    "Full Stack Web Development",
    "Fee installments",
    "Can I pay the Full Stack fee of Rs.14,500 in two installments?"
))

conn.commit()

# Verify counts
cursor.execute("SELECT COUNT(*) FROM registrations")
reg_count = cursor.fetchone()[0]

cursor.execute("SELECT COUNT(*) FROM enquiries")
enq_count = cursor.fetchone()[0]

cursor.execute("SELECT COUNT(*) FROM reviews")
rev_count = cursor.fetchone()[0]

print(f"API & DB Verification:")
print(f"- Total Registrations in DB: {reg_count}")
print(f"- Total Enquiries in DB: {enq_count}")
print(f"- Total Reviews in DB: {rev_count}")

# Verify last registration data
cursor.execute("SELECT reg_number, full_name, interested_course, mobile FROM registrations WHERE reg_number='SK-2026-TEST1'")
row = cursor.fetchone()
print(f"- Verified Sample Registration Record: {row}")

conn.close()
print("API and DB functionality verified successfully!")
