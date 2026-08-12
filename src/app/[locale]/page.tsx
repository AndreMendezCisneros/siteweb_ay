import Link from "next/link";
import { CtaBand } from "@/components/home/CtaBand";
import { FaqList } from "@/components/home/FaqList";
import { Hero } from "@/components/home/Hero";
import { MessengerAppSection } from "@/components/home/MessengerAppSection";
import { PersonalizationBlock } from "@/components/home/PersonalizationBlock";
import { ModuleCard } from "@/components/modulos/ModuleCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CarnetBlock } from "@/components/visuals/CarnetBlock";
import { ProductGallery } from "@/components/visuals/ProductGallery";
import { getAvailableModules, getComingModules } from "@/lib/modules";
import { getDict } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDict(locale);
  const { home, productVisuals, personalization } = dict;
  const available = getAvailableModules(dict);
  const coming = getComingModules(dict);

  return (
    <>
      <Hero locale={locale} dict={dict} />

      <Section>
        <Reveal>
          <SectionHeading title={home.valueTitle} description={dict.site.promise} />
        </Reveal>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {home.valuePoints.map((point, index) => (
            <li key={point.title}>
              <Reveal delay={index * 80} className="border-l-2 border-accent pl-5">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section band>
        <SectionHeading
          eyebrow={home.problemEyebrow}
          title={home.problemTitle}
          description={home.problemDescription}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
              {home.withoutTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {home.withoutItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-error/70" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-[var(--radius-lg)] border border-primary/25 bg-primary-soft/40 p-6">
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
              {home.withTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {home.withItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/plataforma`} className="text-link mt-6 inline-block text-sm">
              {dict.cta.secondary} →
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section id="modulos">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={home.modulesEyebrow}
            title={home.modulesTitle}
            description={home.modulesDescription}
          />
          <Link href={`/${locale}/modulos`} className="text-link text-sm">
            {dict.cta.seeModules} →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((mod, index) => (
            <Reveal key={mod.slug} delay={index * 60} className="h-full">
              <ModuleCard
                href={`/${locale}/modulos/${mod.slug}`}
                name={mod.name}
                summary={mod.summary}
                status={mod.status}
                availableLabel={dict.ui.available}
                comingLabel={dict.ui.comingSoon}
                ctaLabel={dict.ui.seeModule}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <MessengerAppSection locale={locale} dict={dict} />

      <Section band>
        <SectionHeading
          eyebrow={productVisuals.galleryEyebrow}
          title={productVisuals.galleryTitle}
          description={productVisuals.galleryDescription}
        />
        <div className="mt-8">
          <ProductGallery
            labels={productVisuals.screens}
            caption={productVisuals.galleryCaption}
          />
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
        <SectionHeading
          eyebrow={home.methodEyebrow}
          title={home.methodTitle}
          description={home.methodDescription}
        />
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.methodology.map((step, index) => (
            <li key={step.step}>
              <Reveal
                delay={index * 60}
                className="h-full rounded-[var(--radius-lg)] border border-border bg-surface p-6"
              >
                <p className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.16em] text-accent">
                  {step.step}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Link href={`/${locale}/como-funciona`} className="text-link mt-8 inline-block text-sm">
          {dict.cta.howItWorks} →
        </Link>
      </Section>

      <Section band>
        <SectionHeading
          eyebrow={home.audiencesEyebrow}
          title={home.audiencesTitle}
          description={home.audiencesDescription}
        />
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {dict.audiences.map((aud, index) => (
            <li key={aud.slug}>
              <Reveal delay={index * 80} className="h-full rounded-[var(--radius-lg)] border border-border bg-surface p-6">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-ink">
                  {aud.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{aud.summary}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={home.roadmapEyebrow}
          title={home.roadmapTitle}
          description={home.roadmapDescription}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coming.map((mod, index) => (
            <Reveal key={mod.slug} delay={index * 50}>
              <Link
                href={`/${locale}/modulos/${mod.slug}`}
                className="block rounded-[var(--radius-lg)] border border-dashed border-border bg-surface/70 p-5 transition hover:border-primary/40"
              >
                <StatusBadge
                  status="coming-soon"
                  availableLabel={dict.ui.available}
                  comingLabel={dict.ui.comingSoon}
                />
                <h3 className="mt-3 font-[family-name:var(--font-syne)] font-semibold text-ink">
                  {mod.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{mod.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section band>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={home.institutionsEyebrow}
            title={home.institutionsTitle}
            description={home.institutionsDescription}
          />
          <Link href={`/${locale}/instituciones`} className="text-link text-sm">
            {dict.ui.knowMore} →
          </Link>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {dict.institutions.map((inst, index) => (
            <li key={inst.slug}>
              <Reveal
                delay={index * 80}
                className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-hover">
                  {inst.status}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
                  {inst.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{inst.location}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{inst.description}</p>
                <a
                  href={inst.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-5 inline-block text-sm"
                >
                  {dict.ui.enter} →
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={home.plansEyebrow}
            title={home.plansTitle}
            description={home.plansDescription}
          />
          <Link href={`/${locale}/planes`} className="text-link text-sm">
            {dict.cta.seePlans} →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.plans.map((plan, index) => (
            <Reveal
              key={plan.slug}
              delay={index * 60}
              className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-6"
            >
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-ink">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{plan.summary}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
              <Link href={`/${locale}/contacto`} className="text-link mt-5 text-sm">
                {dict.cta.primary} →
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section band>
        <SectionHeading eyebrow={home.faqEyebrow} title={home.faqTitle} />
        <FaqList items={dict.faq} />
      </Section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
