import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale).pages.instituciones;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function InstitucionesPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDict(locale);
  const t = dict.pages.instituciones;

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} description={t.heroDescription} />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {dict.institutions.map((inst, index) => (
            <li key={inst.slug}>
              <Reveal delay={index * 80} className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-hover">
                  {inst.status}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold text-ink">
                  {inst.name}
                </h2>
                <p className="mt-1 text-sm text-muted">{inst.location}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{inst.description}</p>
                <a
                  href={inst.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-6 inline-block text-sm"
                >
                  {dict.ui.enter} →
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
