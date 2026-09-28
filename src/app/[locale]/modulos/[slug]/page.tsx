import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/home/CtaBand";
import { MessengerAppSection } from "@/components/home/MessengerAppSection";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { es } from "@/content/es";
import { getDict, locales } from "@/lib/i18n";
import { getModule, getModuleSlugs } from "@/lib/modules";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getModuleSlugs(es).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const mod = getModule(getDict(locale), slug);
  if (!mod) return {};
  return { title: mod.name, description: mod.summary };
}

export default async function ModulePage({ params }: Props) {
  const { locale, slug } = await params;
  const dict = getDict(locale);
  const mod = getModule(dict, slug);
  if (!mod) notFound();

  const related = dict.modules.filter((m) => m.slug !== mod.slug).slice(0, 3);
  const isMessenger = slug === "mensajeria";

  return (
    <>
      <PageHero eyebrow={dict.pages.modulos.heroEyebrow} title={mod.name} description={mod.summary} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <StatusBadge
              status={mod.status}
              availableLabel={dict.ui.available}
              comingLabel={dict.ui.comingSoon}
            />
            <SectionHeading title={mod.name} description={mod.description} />
            <ul className="mt-8 space-y-3">
              {mod.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-base text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            {isMessenger ? (
              <div className="mt-10 rounded-[var(--radius-lg)] border border-primary/25 bg-primary-soft/50 p-6">
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
                  {dict.messengerApp.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {dict.messengerApp.description}
                </p>
                <div className="mt-6">
                  <Button href={dict.messengerApp.href} className="w-full sm:w-auto">
                    {dict.messengerApp.button}
                  </Button>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">{dict.messengerApp.note}</p>
              </div>
            ) : null}
          </div>
          <aside className="h-fit rounded-[var(--radius-lg)] border border-border bg-surface p-6 lg:sticky lg:top-28">
            <p className="text-sm text-muted">{dict.ui.byRyjec}</p>
            <p className="mt-3 text-sm text-muted">{dict.site.promise}</p>
            <div className="mt-6 space-y-3">
              {isMessenger ? (
                <Button href={dict.messengerApp.href} className="w-full">
                  {dict.messengerApp.button}
                </Button>
              ) : null}
              <Button
                href={`/${locale}/contacto`}
                variant={isMessenger ? "secondary" : "primary"}
                className="w-full"
              >
                {dict.cta.primary}
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {isMessenger ? (
        <MessengerAppSection locale={locale} dict={dict} showDownload={false} showModuleLink={false} />
      ) : null}

      <Section band={!isMessenger}>
        <SectionHeading title={dict.cta.seeModules} />
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/${locale}/modulos/${item.slug}`}
                className="block rounded-[var(--radius-md)] border border-border bg-surface p-5 hover:border-primary/40"
              >
                <p className="font-[family-name:var(--font-syne)] font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
