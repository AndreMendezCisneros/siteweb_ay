"""Generate 1200x630 Open Graph image. Logo file is composited unmodified."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "og-asisacademy-1200.png"
LOGO = ROOT / "public" / "images" / "logo_asisacademy_sf.png"
FONT = Path(__file__).resolve().parent / "Fraunces.ttf"

W, H = 1200, 630
BG = (246, 244, 240)  # --bg #F6F4F0
INK = (27, 27, 24)  # --ink #1B1B18
FOREST = (20, 83, 45)  # --accent-2 #14532D
AMBER = (232, 163, 23)  # --accent #E8A317
SURFACE = (255, 255, 255)

TITLE = "Asistencia y seguimiento para instituciones que enseñan en serio."
BRAND = "AsisAcademy"


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def main() -> None:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    frame = (56, 48, W - 56, H - 48)
    draw.rectangle(frame, fill=SURFACE, outline=(27, 27, 24, 30), width=1)
    draw.rectangle(frame, outline=(216, 213, 206), width=1)

    logo = Image.open(LOGO).convert("RGBA")
    logo_h = 120
    ratio = logo_h / logo.height
    logo_w = round(logo.width * ratio)
    logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

    cx = (frame[0] + frame[2]) // 2
    logo_x = cx - logo_w // 2
    logo_y = frame[1] + 48
    img.paste(logo, (logo_x, logo_y), logo)
    draw = ImageDraw.Draw(img)

    brand_font = ImageFont.truetype(str(FONT), 22)
    title_font = ImageFont.truetype(str(FONT), 36)

    brand_w = draw.textlength(BRAND, font=brand_font)
    brand_y = logo_y + logo_h + 22
    draw.text((cx - brand_w / 2, brand_y), BRAND, font=brand_font, fill=FOREST)

    max_text = frame[2] - frame[0] - 96
    lines = wrap(draw, TITLE, title_font, max_text)
    line_h = 46
    title_top = brand_y + 40
    for i, line in enumerate(lines):
        lw = draw.textlength(line, font=title_font)
        draw.text((cx - lw / 2, title_top + i * line_h), line, font=title_font, fill=INK)

    underline_y = title_top + len(lines) * line_h + 10
    draw.rectangle((cx - 20, underline_y, cx + 20, underline_y + 2), fill=AMBER)

    img.save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} {img.size}")


if __name__ == "__main__":
    main()
