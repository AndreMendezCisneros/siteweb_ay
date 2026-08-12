import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale).pages.comoFunciona;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ComoFuncionaPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDict(locale);
  const t = dict.pages.comoFunciona;

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} description={t.heroDescription} />
      <Section>
        <SectionHeading title={dict.home.methodTitle} description={dict.home.methodDescription} />
        <div className="mt-10 space-y-8">
          {dict.methodology.map((item, index) => (
            <Reveal key={item.step} delay={index * 50}>
              <article className="grid gap-3 border-b border-border pb-8 last:border-0 md:grid-cols-[6rem_1fr]">
                <p className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.16em] text-accent">
                  {item.step}
                </p>
                <div>
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-base text-muted">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
