import type { Metadata } from "next";
import { ContactForm } from "@/components/contacto/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale).pages.contacto;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ContactoPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDict(locale);
  const t = dict.pages.contacto;
  const wa = `https://wa.me/${dict.site.whatsappDigits}?text=${encodeURIComponent(
    dict.whatsappFloat.message,
  )}`;

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} description={t.heroDescription} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-ink">
              {t.formTitle}
            </h2>
            <p className="mt-2 text-sm text-muted">{t.formDescription}</p>
            <div className="mt-8">
              <ContactForm t={dict.form} submitLabel={dict.cta.submit} />
            </div>
          </div>
          <aside className="space-y-8">
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
                {t.afterTitle}
              </h2>
              <ol className="mt-4 space-y-4 text-sm text-muted">
                {t.afterSteps.map((step) => (
                  <li key={step.title}>
                    <span className="font-semibold text-ink">{step.title}</span> {step.text}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
                {t.whatsappLabel}
              </h2>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-medium text-ink underline-offset-2 hover:text-primary hover:underline"
              >
                {dict.site.phone} →
              </a>
              <p className="mt-2 text-sm text-muted">{dict.cta.pilot}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
