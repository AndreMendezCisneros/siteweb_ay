import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale).pages.nosotros;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function NosotrosPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDict(locale);
  const t = dict.pages.nosotros;

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} description={t.heroDescription} />
      <Section>
        <Reveal>
          <SectionHeading title={dict.site.definition} description={dict.site.promise} />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {dict.home.valuePoints.map((point) => (
              <li
                key={point.title}
                className="rounded-[var(--radius-lg)] border border-border bg-surface p-6"
              >
                <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-ink">
                  {point.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
      <Section band>
        <SectionHeading title={t.teamTitle} description={t.teamDescription} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="rounded-[var(--radius-lg)] border border-dashed border-border bg-surface/60 p-6 text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-primary-soft" aria-hidden />
              <p className="mt-4 text-sm text-muted">{dict.site.parentBrand}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
