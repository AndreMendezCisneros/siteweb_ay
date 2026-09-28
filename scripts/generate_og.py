"""Generate 1200x630 Open Graph image. Logo file is composited unmodified."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "og-asisacademy-1200.png"
LOGO = ROOT / "public" / "images" / "logo_asisacademy_sf.png"
FONT = Path(__file__).resolve().parent / "Fraunces.ttf"

W, H = 1200, 630
BG = (250, 246, 238)  # --bg #FAF6EE
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

    # Notebook grid, very light, only as texture.
    step = 28
    grid = (*INK, 18)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(overlay)
    for x in range(0, W, step):
        gdraw.line([(x, 0), (x, H)], fill=grid, width=1)
    for y in range(0, H, step):
        gdraw.line([(0, y), (W, y)], fill=grid, width=1)
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img)

    # Ink frame + hard offset shadow
    frame = (48, 40, W - 56, H - 48)
    shadow = (frame[0] + 8, frame[1] + 8, frame[2] + 8, frame[3] + 8)
    draw.rectangle(shadow, fill=INK)
    draw.rectangle(frame, fill=SURFACE, outline=INK, width=3)

    logo = Image.open(LOGO).convert("RGBA")
    logo_h = 148
    ratio = logo_h / logo.height
    logo_w = round(logo.width * ratio)
    logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

    cx = (frame[0] + frame[2]) // 2
    logo_x = cx - logo_w // 2
    logo_y = frame[1] + 36
    img.paste(logo, (logo_x, logo_y), logo)
    draw = ImageDraw.Draw(img)

    brand_font = ImageFont.truetype(str(FONT), 28)
    title_font = ImageFont.truetype(str(FONT), 42)

    brand_w = draw.textlength(BRAND, font=brand_font)
    brand_y = logo_y + logo_h + 18
    draw.text((cx - brand_w / 2, brand_y), BRAND, font=brand_font, fill=FOREST)

    max_text = frame[2] - frame[0] - 80
    lines = wrap(draw, TITLE, title_font, max_text)
    line_h = 52
    title_top = brand_y + 44
    for i, line in enumerate(lines):
        lw = draw.textlength(line, font=title_font)
        draw.text((cx - lw / 2, title_top + i * line_h), line, font=title_font, fill=INK)

    # Amber underline (fill, never amber-as-text)
    last_w = draw.textlength(lines[-1], font=title_font)
    underline_y = title_top + len(lines) * line_h + 4
    draw.rectangle(
        (cx - last_w / 2, underline_y, cx + last_w / 2, underline_y + 6),
        fill=AMBER,
    )

    img.save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} {img.size}")


if __name__ == "__main__":
    main()
