import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  light = false,
  href = "/",
}: {
  className?: string;
  light?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
      aria-label="AsisAcademy — Inicio"
    >
      <Image
        src="/images/logo_asisacademy_sf.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />
      <span
        className={`font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        AsisAcademy
      </span>
    </Link>
  );
}
