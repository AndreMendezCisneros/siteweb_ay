import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale).pages.planes;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function PlanesPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDict(locale);
  const t = dict.pages.planes;

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} description={t.heroDescription} />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.plans.map((plan, index) => (
            <Reveal
              key={plan.slug}
              delay={index * 60}
              className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-6"
            >
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
                {plan.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{plan.summary}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
              <Link href={`/${locale}/contacto`} className="text-link mt-6 text-sm">
                {dict.cta.primary} →
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted">{t.note}</p>
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
