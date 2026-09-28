import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { MethodTimeline } from "@/components/home/MethodTimeline";
import { PageHero } from "@/components/layout/PageHero";
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
        <div className="mt-10">
          <MethodTimeline steps={dict.methodology} />
        </div>
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
