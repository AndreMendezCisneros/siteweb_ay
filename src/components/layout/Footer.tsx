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
    <footer className="mt-auto border-t border-border bg-surface text-ink">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo href={`/${locale}`} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.tagline}</p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-accent-2">{footer.product}</h2>
          <ul className="mt-4 space-y-2">
            {nav.slice(1, 6).map((link) => (
              <li key={link.href}>
                <Link href={localized(link.href)} className="text-sm text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-accent-2">{footer.company}</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href={localized("/nosotros")} className="text-sm text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                {dict.nav.find((n) => n.href === "/nosotros")?.label}
              </Link>
            </li>
            <li>
              <Link href={localized("/contacto")} className="text-sm text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                {dict.nav.find((n) => n.href === "/contacto")?.label}
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.emails.contact}`} className="text-sm text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                {site.emails.contact}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-accent-2">{footer.legal}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={localized("/legal/privacidad")} className="text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                {footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={localized("/legal/terminos")} className="text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                {footer.terms}
              </Link>
            </li>
            <li>
              <Link href={localized("/legal/cookies")} className="text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                {footer.cookies}
              </Link>
            </li>
            <li>
              <Link href={localized("/legal/reclamaciones")} className="text-ink hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4">
                {footer.claims}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © 2026 {site.parentBrand} · {site.name}. {footer.rights}
          </p>
          <p>{site.promise}</p>
        </Container>
      </div>
    </footer>
  );
}
