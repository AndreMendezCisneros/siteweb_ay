import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dict } from "@/lib/i18n";

export function CtaBand({ locale, dict }: { locale: string; dict: Dict }) {
  const wa = `https://wa.me/${dict.site.whatsappDigits}?text=${encodeURIComponent(
    dict.whatsappFloat.message,
  )}`;

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="overflow-hidden rounded-[var(--radius-lg)] bg-primary px-6 py-12 sm:px-10 lg:px-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
              {dict.cta.pilot}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {dict.cta.bandTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{dict.cta.bandDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/contacto`} variant="onDark">
                {dict.cta.primary}
              </Button>
              <a
                href={wa}
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                WhatsApp · 949 261 503
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
