import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

SRC_PATH = r"C:\Users\manoj\.gemini\antigravity\brain\b02b2091-5bc3-4765-83fd-86cde21a318c\.user_uploaded\media_1794061780543_a9689d99.jpg"
OUT_DIR = r"C:\Users\manoj\.gemini\antigravity\scratch\saikumar-computer-institute\assets\images"

os.makedirs(OUT_DIR, exist_ok=True)

# 1. Load original
im = Image.open(SRC_PATH).convert("RGBA")
W, H = im.size

# Save original copy
im.convert("RGB").save(os.path.join(OUT_DIR, "saikumar-raw.jpg"), quality=95)

# The inner photo has bounding box roughly:
# left: 86, top: 116, right: 708, bottom: 924
crop_box = (86, 116, 708, 924)
cropped_portrait = im.crop(crop_box)

# Enhance portrait quality: slight contrast and sharpness
enhancer_con = ImageEnhance.Contrast(cropped_portrait.convert("RGB"))
enhanced = enhancer_con.enhance(1.08)
enhancer_sharp = ImageEnhance.Sharpness(enhanced)
enhanced = enhancer_sharp.enhance(1.15)
enhancer_color = ImageEnhance.Color(enhanced)
enhanced = enhancer_color.enhance(1.05)

# Save high-res clean portrait
enhanced.save(os.path.join(OUT_DIR, "saikumar-director.jpg"), quality=96)
print("Saved saikumar-director.jpg, size:", enhanced.size)

# 2. Create Circular Avatar for Founder / About section
avatar_size = (600, 600)
# Center on face: face center is roughly at x=310, y=280 of the cropped image
# Cropped width is 622, height is 808
# Crop a square centered around x=311, y=320
center_x = cropped_portrait.width // 2
center_y = int(cropped_portrait.height * 0.40)
box_half = 270
sq_box = (max(0, center_x - box_half), max(0, center_y - box_half),
          min(cropped_portrait.width, center_x + box_half), min(cropped_portrait.height, center_y + box_half))

square_face = enhanced.crop(sq_box).resize(avatar_size, Image.Resampling.LANCZOS)

# Create circular mask
mask = Image.new("L", avatar_size, 0)
draw_mask = ImageDraw.Draw(mask)
draw_mask.ellipse((0, 0, avatar_size[0], avatar_size[1]), fill=255)

avatar = Image.new("RGBA", avatar_size, (0, 0, 0, 0))
avatar.paste(square_face.convert("RGBA"), (0, 0), mask)
avatar.save(os.path.join(OUT_DIR, "saikumar-circle.png"))
print("Saved saikumar-circle.png")

# 3. Create Official Circular Institute Logo
# Size 512x512
logo_size = 512
logo_img = Image.new("RGBA", (logo_size, logo_size), (0, 0, 0, 0))
draw = ImageDraw.Draw(logo_img)

# Outer circle: Deep Navy (#0d2346)
draw.ellipse((4, 4, logo_size - 4, logo_size - 4), fill=(13, 35, 70, 255), outline=(245, 158, 11, 255), width=8)
# Inner gold accent ring
draw.ellipse((24, 24, logo_size - 24, logo_size - 24), outline=(255, 180, 0, 255), width=3)
draw.ellipse((32, 32, logo_size - 32, logo_size - 32), fill=(15, 45, 90, 255))

# Center face avatar inside the ring
inner_avatar_size = 310
inner_face = square_face.resize((inner_avatar_size, inner_avatar_size), Image.Resampling.LANCZOS)
inner_mask = Image.new("L", (inner_avatar_size, inner_avatar_size), 0)
d_im = ImageDraw.Draw(inner_mask)
d_im.ellipse((0, 0, inner_avatar_size, inner_avatar_size), fill=255)

offset = (logo_size - inner_avatar_size) // 2
logo_img.paste(inner_face.convert("RGBA"), (offset, offset), inner_mask)

# Draw gold ring around the avatar
draw.ellipse((offset - 4, offset - 4, offset + inner_avatar_size + 4, offset + inner_avatar_size + 4), outline=(245, 158, 11, 255), width=5)

logo_img.save(os.path.join(OUT_DIR, "institute-logo.png"))
print("Saved institute-logo.png")

# 4. Save favicon
favicon = logo_img.resize((64, 64), Image.Resampling.LANCZOS)
favicon.save(os.path.join(OUT_DIR, "favicon.png"))
favicon.save(r"C:\Users\manoj\.gemini\antigravity\scratch\saikumar-computer-institute\favicon.png")
print("Saved favicon.png")
