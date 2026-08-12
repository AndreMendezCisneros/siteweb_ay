import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ModuleCard } from "@/components/modulos/ModuleCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getAvailableModules, getComingModules } from "@/lib/modules";
import { getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale).pages.modulos;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ModulosPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDict(locale);
  const t = dict.pages.modulos;

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} description={t.heroDescription} />
      <Section>
        <SectionHeading title={t.availableTitle} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {getAvailableModules(dict).map((mod) => (
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
        <SectionHeading title={t.comingTitle} description={dict.home.roadmapDescription} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {getComingModules(dict).map((mod) => (
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
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
