import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScreenshotFrame } from "@/components/visuals/ScreenshotFrame";
import type { Dict } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: string; dict: Dict }) {
  return (
    <section className="relative min-h-[calc(100svh-7rem)] overflow-hidden">
      <Image
        src="/images/fondo.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink/88 via-primary/82 to-primary-hover/78"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_15%,rgb(34_199_242_/_0.22),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative grid min-h-[calc(100svh-7rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="max-w-xl">
          <p className="animate-fade-up font-[family-name:var(--font-syne)] text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            {dict.home.heroEyebrow}
          </p>
          <h1 className="animate-fade-up mt-3 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {dict.site.name}
          </h1>
          <p
            className="animate-fade-up mt-4 font-[family-name:var(--font-syne)] text-xl font-medium leading-snug text-white/90 sm:text-2xl"
            style={{ animationDelay: "80ms" }}
          >
            {dict.site.tagline}
          </p>
          <p
            className="animate-fade-up mt-5 text-lg leading-relaxed text-white/75"
            style={{ animationDelay: "140ms" }}
          >
            {dict.site.description}
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Button href={`/${locale}/contacto`} variant="primary" className="min-w-[15rem]">
              {dict.cta.primary}
            </Button>
            <Button href={`/${locale}/plataforma`} variant="onDark" className="min-w-[13rem]">
              {dict.cta.secondary}
            </Button>
          </div>
        </div>
        <div className="animate-fade-up w-full max-w-xl justify-self-end" style={{ animationDelay: "240ms" }}>
          <ScreenshotFrame
            src="/images/page_inicio.png"
            alt={dict.productVisuals.heroAlt}
            caption={dict.ui.mockCaption}
            priority
            className="[&_figcaption]:text-white/55 [&_div]:border-white/20"
          />
        </div>
      </Container>
    </section>
  );
}
