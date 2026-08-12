import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import type { Dict } from "@/lib/i18n";

export function Footer({ locale, dict }: { locale: string; dict: Dict }) {
  const { site, footer, nav } = dict;

  function localized(href: string) {
    return `/${locale}${href === "/" ? "" : href}`;
  }

  return (
    <footer className="mt-auto border-t border-border bg-ink text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light href={`/${locale}`} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{footer.tagline}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
            {footer.product}
          </h2>
          <ul className="mt-4 space-y-2">
            {nav.slice(1, 6).map((link) => (
              <li key={link.href}>
                <Link href={localized(link.href)} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
            {footer.company}
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href={localized("/nosotros")} className="text-sm text-white/80 hover:text-white">
                {dict.nav.find((n) => n.href === "/nosotros")?.label}
              </Link>
            </li>
            <li>
              <Link href={localized("/contacto")} className="text-sm text-white/80 hover:text-white">
                {dict.nav.find((n) => n.href === "/contacto")?.label}
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.emails.contact}`} className="text-sm text-white/80 hover:text-white">
                {site.emails.contact}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
            {footer.legal}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={localized("/legal/privacidad")} className="text-white/80 hover:text-white">
                {footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={localized("/legal/terminos")} className="text-white/80 hover:text-white">
                {footer.terms}
              </Link>
            </li>
            <li>
              <Link href={localized("/legal/cookies")} className="text-white/80 hover:text-white">
                {footer.cookies}
              </Link>
            </li>
            <li>
              <Link href={localized("/legal/reclamaciones")} className="text-white/80 hover:text-white">
                {footer.claims}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.parentBrand} · {site.name}. {footer.rights}
          </p>
          <p>{site.promise}</p>
        </Container>
      </div>
    </footer>
  );
}
