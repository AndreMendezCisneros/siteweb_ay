import { NextResponse } from "next/server";
import { es } from "@/content/es";

type Payload = {
  name?: string;
  email?: string;
  school?: string;
  phone?: string;
  need?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Solicitud inválida." }, { status: 400 });
  }

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const school = body.school?.trim() || "";
  const phone = body.phone?.trim() || "";
  const need = body.need?.trim() || "";

  if (!name || !email || !school || !need) {
    return NextResponse.json(
      { ok: false, message: "Completa nombre, correo, colegio y mensaje." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Correo inválido." }, { status: 400 });
  }

  const subject = encodeURIComponent(`Prueba gratuita AsisAcademy — ${school}`);
  const lines = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Colegio: ${school}`,
    phone ? `Teléfono: ${phone}` : null,
    "",
    "Mensaje:",
    need,
  ].filter(Boolean);

  const mailto = `mailto:${es.site.emails.contact}?subject=${subject}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;

  return NextResponse.json({
    ok: true,
    message: "Solicitud recibida.",
    mailto,
  });
}
