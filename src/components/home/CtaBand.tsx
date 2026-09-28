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
        <div className="panel bg-primary-soft px-6 py-12 sm:px-10 lg:px-14">
          <div className="max-w-2xl">
            <p className="kicker">{dict.cta.pilot}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {dict.cta.bandTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{dict.cta.bandDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/contacto`} variant="primary">
                {dict.cta.primary}
              </Button>
              <a
                href={wa}
                className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
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
