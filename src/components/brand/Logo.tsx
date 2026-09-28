import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  href = "/",
}: {
  className?: string;
  light?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${className}`}
      aria-label="AsisAcademy — Inicio"
    >
      <Image
        src="/images/logo_asisacademy_sf.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        priority
      />
      <span className="font-display text-xl font-semibold tracking-tight text-ink">AsisAcademy</span>
    </Link>
  );
}
