import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

IMAGES_DIR = r"C:\Users\manoj\.gemini\antigravity\scratch\saikumar-computer-institute\assets\images"
os.makedirs(IMAGES_DIR, exist_ok=True)

# Helper to create gradient
def create_gradient(width, height, color1, color2, direction="diagonal"):
    base = Image.new("RGBA", (width, height), color1)
    top = Image.new("RGBA", (width, height), color2)
    mask = Image.new("L", (width, height))
    mask_data = []
    for y in range(height):
        for x in range(width):
            if direction == "diagonal":
                val = int(255 * ((x / width) * 0.6 + (y / height) * 0.4))
            elif direction == "horizontal":
                val = int(255 * (x / width))
            else:
                val = int(255 * (y / height))
            mask_data.append(min(255, max(0, val)))
    mask.putdata(mask_data)
    return Image.composite(top, base, mask)

courses = [
    {
        "id": "course-fundamentals",
        "title": "Computer Fundamentals",
        "code": "CF-101",
        "color1": (15, 32, 67),
        "color2": (24, 76, 120),
        "accent": (255, 122, 0),
        "icon_label": "PC & OS",
        "badge": "Beginner Friendly"
    },
    {
        "id": "course-msoffice",
        "title": "MS Office Suite",
        "code": "MSO-102",
        "color1": (180, 40, 20),
        "color2": (220, 80, 40),
        "accent": (255, 200, 50),
        "icon_label": "W | X | P",
        "badge": "Most Popular"
    },
    {
        "id": "course-advexcel",
        "title": "Advanced Excel & MIS",
        "code": "EXL-201",
        "color1": (16, 124, 65),
        "color2": (30, 160, 90),
        "accent": (255, 215, 0),
        "icon_label": "Excel MIS",
        "badge": "High Demand"
    },
    {
        "id": "course-tally",
        "title": "Tally Prime with GST",
        "code": "TLY-202",
        "color1": (18, 50, 110),
        "color2": (40, 100, 180),
        "accent": (255, 140, 0),
        "icon_label": "Tally GST",
        "badge": "Job Oriented"
    },
    {
        "id": "course-python",
        "title": "Python Programming",
        "code": "PY-301",
        "color1": (20, 40, 80),
        "color2": (48, 105, 152),
        "accent": (255, 212, 59),
        "icon_label": "Python 3",
        "badge": "Industry #1"
    },
    {
        "id": "course-java",
        "title": "Java Programming",
        "code": "JV-302",
        "color1": (160, 30, 30),
        "color2": (220, 70, 40),
        "accent": (83, 130, 161),
        "icon_label": "Java Core",
        "badge": "Enterprise"
    },
    {
        "id": "course-cpp",
        "title": "C & C++ Programming",
        "code": "CPP-303",
        "color1": (0, 68, 130),
        "color2": (0, 110, 190),
        "accent": (255, 170, 0),
        "icon_label": "C / C++",
        "badge": "Core Foundation"
    },
    {
        "id": "course-webdev",
        "title": "Web Development",
        "code": "WEB-103",
        "color1": (228, 77, 38),
        "color2": (241, 101, 41),
        "accent": (41, 101, 241),
        "icon_label": "HTML/CSS/JS",
        "badge": "Trending"
    },
    {
        "id": "course-fullstack",
        "title": "Full Stack Web Dev",
        "code": "FSD-401",
        "color1": (15, 23, 42),
        "color2": (30, 58, 138),
        "accent": (249, 115, 22),
        "icon_label": "Full Stack",
        "badge": "Placement Star"
    },
    {
        "id": "course-data-analytics",
        "title": "Data Analytics",
        "code": "DA-402",
        "color1": (10, 35, 65),
        "color2": (15, 80, 140),
        "accent": (242, 200, 17),
        "icon_label": "Power BI & SQL",
        "badge": "Top Salary"
    },
    {
        "id": "course-sql",
        "title": "SQL & Databases",
        "code": "DB-304",
        "color1": (0, 95, 140),
        "color2": (0, 140, 190),
        "accent": (255, 153, 0),
        "icon_label": "SQL & Oracle",
        "badge": "Essential"
    },
    {
        "id": "course-digital-marketing",
        "title": "Digital Marketing",
        "code": "DM-203",
        "color1": (120, 20, 120),
        "color2": (180, 40, 130),
        "accent": (255, 165, 0),
        "icon_label": "SEO & Ads",
        "badge": "Career Track"
    }
]

W, H = 800, 500

for c in courses:
    img = create_gradient(W, H, c["color1"], c["color2"])
    draw = ImageDraw.Draw(img)
    
    # Decorative tech grid pattern
    for x in range(0, W, 40):
        draw.line([(x, 0), (x, H)], fill=(255, 255, 255, 15), width=1)
    for y in range(0, H, 40):
        draw.line([(0, y), (W, y)], fill=(255, 255, 255, 15), width=1)
        
    # Decorative circuit / tech circles
    draw.ellipse((W - 220, -60, W + 100, 260), outline=(255, 255, 255, 25), width=3)
    draw.ellipse((W - 170, -10, W + 50, 210), outline=c["accent"] + (40,), width=2)
    
    # Bottom accent stripe
    draw.rectangle([0, H - 12, W, H], fill=c["accent"] + (255,))
    
    # Central visual card
    card_x0, card_y0 = 60, 60
    card_x1, card_y1 = W - 60, H - 60
    
    # Category badge top-left
    draw.rounded_rectangle([70, 70, 260, 115], radius=8, fill=(0, 0, 0, 100), outline=c["accent"] + (200,), width=2)
    
    # Center Tech Emblem circle
    cx, cy = W // 2, H // 2 - 10
    cr = 85
    draw.ellipse((cx - cr - 6, cy - cr - 6, cx + cr + 6, cy + cr + 6), outline=c["accent"] + (255,), width=4)
    draw.ellipse((cx - cr, cy - cr, cx + cr, cy + cr), fill=(10, 20, 35, 220))
    
    # Save course image
    file_path = os.path.join(IMAGES_DIR, f"{c['id']}.jpg")
    img.convert("RGB").save(file_path, quality=92)

print(f"Generated {len(courses)} course images successfully.")

# Also generate gallery placeholder images
gallery_items = [
    ("lab-1", "Modern Computer Lab Workstations", (15, 35, 75), (30, 80, 150), "HIGH-SPEED LAB FACILITIES"),
    ("lab-2", "Practical Hands-on Coding Session", (20, 60, 90), (40, 120, 160), "1:1 DEDICATED COMPUTER DESK"),
    ("lab-3", "Tally & Accounting Practical Training", (30, 45, 70), (60, 90, 130), "REAL COMPANY PROJECT LAB"),
    ("class-1", "Interactive Programming Lectures", (40, 25, 70), (90, 50, 140), "MULTIMEDIA SMART CLASSROOM"),
    ("cert-1", "Certificate Distribution Ceremony", (80, 40, 20), (160, 80, 30), "GOVERNMENT RECOGNIZED CERTIFICATION"),
    ("faculty-1", "One-on-One Faculty Guidance", (15, 70, 60), (30, 140, 110), "EXPERT MENTORSHIP & DOUBT CLEARING")
]

for g_id, g_title, col1, col2, tag in gallery_items:
    g_img = create_gradient(900, 600, col1, col2)
    g_draw = ImageDraw.Draw(g_img)
    for x in range(0, 900, 45):
        g_draw.line([(x, 0), (x, 600)], fill=(255, 255, 255, 12), width=1)
    for y in range(0, 600, 45):
        g_draw.line([(0, y), (900, y)], fill=(255, 255, 255, 12), width=1)
    g_draw.rectangle([0, 586, 900, 600], fill=(255, 122, 0, 255))
    g_img.convert("RGB").save(os.path.join(IMAGES_DIR, f"gallery-{g_id}.jpg"), quality=92)

print("Generated gallery images.")
