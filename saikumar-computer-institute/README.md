# SAIKUMAR COMPUTER TRAINING INSTITUTE
### Official Website & Academic Web Portal
**Location:** Kurnool, Andhra Pradesh, India  
**Tagline:** *"Learn Today, Lead Tomorrow."*  
**Secondary Tagline:** *"Empowering Students with Digital Skills."*  
**Accreditation:** Govt. Regd. • ISO 9001:2015 Certified  

---

## 🏛️ Project Overview

This is a complete, modern, professional, attractive, and fully interactive website developed for **SAIKUMAR COMPUTER TRAINING INSTITUTE** in Andhra Pradesh, India.

The portal has been developed to commercial educational institute standards with a Deep Navy Blue, Crisp White, and Vibrant Warm Orange palette, smooth transitions, interactive cards, live SQLite database backend, and mobile responsiveness.

---

## 📸 Personal Photograph Integration

The founder's uploaded personal photograph has been professionally enhanced and integrated across the website:
1. **Official Circular Institute Logo (`assets/images/institute-logo.png`):**
   - High-resolution circular emblem with Sai Kumar's cropped and color-balanced portrait.
   - Gold and Navy Blue border rings with registration stars.
   - Displayed in the sticky top navigation bar beside the institute name across all 8 pages.
2. **Founder & Managing Director Spotlight (`about.html` & `assets/images/saikumar-director.jpg`):**
   - Clean portrait cropped inside the raw borders, eliminating background clutter and noise.
   - Framed in an executive modern badge with gold accent trim, title badge, and inspirational quote.

---

## 🌐 Complete 8 Individual Pages

| Page | File | Description & Key Features |
|---|---|---|
| **1. Home** | [`index.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/index.html) | Hero banner with floating badges, stats, welcome message, popular courses preview, "Why Choose Us" features, student testimonials preview, and quick enquiry CTAs. |
| **2. About Us** | [`about.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/about.html) | Prominently displays Sri Sai Kumar's photograph, Founder message, institute history, mission & vision, 4-stage teaching methodology, and lab infrastructure. |
| **3. Our Courses** | [`courses.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/courses.html) | All 12 courses with interactive category filtering, live search bar, course duration, fees in Indian Rupees (₹), and "Learn More" links. |
| **4. Course Details** | [`course-details.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/course-details.html) | Deep dive into any of the 12 courses: module-by-module accordion syllabus, practical lab project breakdown, skills learned, prerequisites, certificate info, and direct "Enroll Now" / "WhatsApp Enquiry". |
| **5. Student Registration** | [`registration.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/registration.html) | Professional student admission form with Indian 10-digit mobile validation, district selector, course dropdown, batch timing selection, and instant printable Registration Slip modal with roll number. |
| **6. Gallery** | [`gallery.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/gallery.html) | Categorized photo gallery (Computer Labs, Practical Training, Smart Classrooms, Certificate Events) with zoom hover animations and lightbox popup modal. |
| **7. Student Reviews** | [`reviews.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/reviews.html) | Verified student testimonials with star ratings, student photos/avatars, courses, AP towns, and an interactive "Submit Your Review" modal that saves directly to SQLite DB. |
| **8. Contact Us** | [`contact.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/contact.html) | Primary Kurnool campus address, regional service references (Proddatur, Kadapa, Vijayawada), phone numbers (+91), email, office hours, interactive Google Map embed, and contact enquiry form. |

---

## 💻 12 Comprehensive Courses Offered

All course fees are strictly displayed in **Indian Rupees (₹)**:
1. **Computer Fundamentals** — 1 Month | ₹2,500
2. **MS Office (Word, Excel, PowerPoint)** — 2 Months | ₹3,500
3. **Advanced Excel & MIS Reporting** — 1.5 Months | ₹4,500
4. **Tally Prime with GST & Accounting** — 2.5 Months | ₹5,500
5. **Python Programming (Core & Advanced)** — 2.5 Months | ₹7,500
6. **Java Programming (Core & Enterprise)** — 3 Months | ₹8,000
7. **C and C++ Programming** — 2 Months | ₹4,500
8. **Web Development (HTML, CSS, JavaScript)** — 2 Months | ₹6,500
9. **Full Stack Web Development (MERN / Python)** — 4.5 Months | ₹14,500
10. **Data Analytics (Power BI, Excel, SQL, Python)** — 3 Months | ₹11,000
11. **SQL and Database Management (MySQL & Oracle)** — 1.5 Months | ₹4,500
12. **Digital Marketing (SEO, SMM, Google Ads)** — 2 Months | ₹6,000

---

## 🇮🇳 Indian Location & Address Details

- **Country:** India
- **State:** Andhra Pradesh
- **Currency:** Indian Rupees (₹) ONLY. No foreign symbols.
- **Phone Prefix:** +91
- **Primary Campus Address:**
  `D.No. 40/815-A, Near Old Bus Stand & Raj Vihar Circle, Main Road, Kurnool - 518001, Andhra Pradesh, India.`
- **Regional Student Service Areas:** Kurnool, Proddatur (YSR Kadapa District), Kadapa, and Vijayawada.

---

## 🚀 How to Run the Website

### Method 1: Double-Click Batch File (Recommended)
Simply double-click `start_server.bat` in the project folder. It will launch the local Python server and open the website in your default web browser automatically!

### Method 2: Command Line
```powershell
cd C:\Users\manoj\.gemini\antigravity\scratch\saikumar-computer-institute
python server.py
```
Then open your browser at:
`http://localhost:8080/index.html`

### Method 3: Direct File Opening
You can also open [`index.html`](file:///C:/Users/manoj/.gemini/antigravity/scratch/saikumar-computer-institute/index.html) directly in any browser (Chrome, Edge, Firefox). The frontend features built-in fallback data for reviews and forms so the entire site functions seamlessly even without a running server!

---

## 📁 Project Structure

```
saikumar-computer-institute/
├── assets/
│   ├── css/
│   │   └── style.css                 # Master modern stylesheet
│   ├── js/
│   │   ├── courses-data.js          # Centralized 12-course catalog & syllabus DB
│   │   └── main.js                  # Interactive logic, drawer, filter, lightbox, API handlers
│   └── images/
│       ├── institute-logo.png        # Official emblem logo with founder photo
│       ├── saikumar-director.jpg     # Professionally enhanced portrait
│       ├── saikumar-circle.png       # Circular avatar
│       ├── course-*.jpg              # 12 course cards visual imagery
│       └── gallery-*.jpg             # High-tech lab and campus activities
├── data/
│   └── institute.db                  # SQLite database (registrations, enquiries, reviews)
├── index.html                        # Page 1: Home
├── about.html                        # Page 2: About Us
├── courses.html                      # Page 3: Our Courses
├── course-details.html               # Page 4: Course Details & Syllabus
├── registration.html                 # Page 5: Student Registration
├── gallery.html                      # Page 6: Campus Gallery
├── reviews.html                      # Page 7: Student Reviews
├── contact.html                      # Page 8: Contact Us
├── server.py                         # Python HTTP server + SQLite REST API
├── start_server.bat                  # One-click Windows launch script
├── test_suite.py                     # Automated quality assurance tests
└── README.md                         # Documentation
```
