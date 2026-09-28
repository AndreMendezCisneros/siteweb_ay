import { HeroVideo } from "@/components/home/HeroVideo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dict } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: string; dict: Dict }) {
  return (
    <section className="relative border-b border-border bg-background">
      <Container className="relative flex flex-col items-center py-16 text-center sm:py-20 lg:py-24">
        <p className="kicker animate-fade-up">{dict.home.heroLabel}</p>
        <h1 className="animate-fade-up mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
          {dict.home.heroTitle}
        </h1>
        <span className="rule mx-auto" aria-hidden />
        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "80ms" }}
        >
          {dict.home.heroSubtitle}
        </p>
        <div
          className="animate-fade-up mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "140ms" }}
        >
          <Button href={`/${locale}/contacto`} variant="primary" className="min-w-[15rem]">
            {dict.cta.primary}
          </Button>
          <Button href={`/${locale}/plataforma`} variant="secondary" className="min-w-[13rem]">
            {dict.cta.secondary}
          </Button>
        </div>

        <figure className="animate-fade-up mt-14 w-full" style={{ animationDelay: "200ms" }}>
          <div className="ink-frame">
            <HeroVideo title={dict.home.heroVideoTitle} />
          </div>
          <figcaption className="mt-3 text-xs text-muted">{dict.home.heroVideoTitle}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
