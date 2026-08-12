import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/home/CtaBand";
import { PersonalizationBlock } from "@/components/home/PersonalizationBlock";
import { PageHero } from "@/components/layout/PageHero";
import { ModuleCard } from "@/components/modulos/ModuleCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CarnetBlock } from "@/components/visuals/CarnetBlock";
import { ProductGallery } from "@/components/visuals/ProductGallery";
import { ScreenshotFrame } from "@/components/visuals/ScreenshotFrame";
import { getAvailableModules, getComingModules } from "@/lib/modules";
import { getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale).pages.plataforma;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function PlataformaPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDict(locale);
  const t = dict.pages.plataforma;
  const { productVisuals, personalization } = dict;
  const available = getAvailableModules(dict);
  const coming = getComingModules(dict);

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} description={t.heroDescription} />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ul className="grid gap-5">
            {dict.home.valuePoints.map((point, i) => (
              <li key={point.title}>
                <Reveal delay={i * 70} className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
                  <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-ink">
                    {point.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{point.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={100}>
            <ScreenshotFrame
              src="/images/page_asistencia.png"
              alt={productVisuals.screens.find((s) => s.key === "asistencia")?.label ?? "Asistencia"}
              caption={productVisuals.galleryCaption}
            />
          </Reveal>
        </div>
      </Section>
      <Section band>
        <SectionHeading
          eyebrow={productVisuals.galleryEyebrow}
          title={productVisuals.galleryTitle}
          description={productVisuals.galleryDescription}
        />
        <div className="mt-8">
          <ProductGallery labels={productVisuals.screens} caption={productVisuals.galleryCaption} />
        </div>
      </Section>
      <Section>
        <PersonalizationBlock {...personalization} />
      </Section>
      <Section band>
        <CarnetBlock
          title={productVisuals.carnetTitle}
          description={productVisuals.carnetDescription}
          points={productVisuals.carnetPoints}
          imageAlt={productVisuals.carnetAlt}
        />
      </Section>
      <Section>
        <SectionHeading title={dict.pages.modulos.availableTitle} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((mod) => (
            <ModuleCard
              key={mod.slug}
              href={`/${locale}/modulos/${mod.slug}`}
              name={mod.name}
              summary={mod.summary}
              status={mod.status}
              availableLabel={dict.ui.available}
              comingLabel={dict.ui.comingSoon}
              ctaLabel={dict.ui.seeModule}
            />
          ))}
        </div>
      </Section>
      <Section band>
        <SectionHeading
          title={dict.pages.modulos.comingTitle}
          description={dict.home.roadmapDescription}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coming.map((mod) => (
            <li key={mod.slug}>
              <Link
                href={`/${locale}/modulos/${mod.slug}`}
                className="block rounded-[var(--radius-md)] border border-dashed border-border p-4 text-sm text-muted hover:border-primary/40"
              >
                <span className="font-semibold text-ink">{mod.name}</span> — {mod.summary}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
