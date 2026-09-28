import Image from "next/image";
import { HeroVideo } from "@/components/home/HeroVideo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dict } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: string; dict: Dict }) {
  return (
    <section className="hero-grid relative overflow-hidden border-b-2 border-ink">
      <Container className="relative flex flex-col items-center py-14 text-center sm:py-16 lg:py-20">
        <p className="kicker animate-fade-up">{dict.home.heroLabel}</p>
        <h1 className="animate-fade-up mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {dict.home.heroTitle}
        </h1>
        <p
          className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "80ms" }}
        >
          {dict.home.heroSubtitle}
        </p>
        <div
          className="animate-fade-up mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
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
            <Image
              src="/images/page_inicio.png"
              alt={dict.productVisuals.heroAlt}
              width={1280}
              height={800}
              priority
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-muted">{dict.ui.mockCaption}</figcaption>
        </figure>

        <figure className="animate-fade-up mt-8 w-full" style={{ animationDelay: "260ms" }}>
          <div className="ink-frame">
            <HeroVideo title={dict.home.heroVideoTitle} />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-muted">{dict.home.heroVideoTitle}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
