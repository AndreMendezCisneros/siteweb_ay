import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Dict } from "@/lib/i18n";

export function MessengerAppSection({
  locale,
  dict,
  showDownload = true,
  showModuleLink = true,
}: {
  locale: string;
  dict: Dict;
  showDownload?: boolean;
  showModuleLink?: boolean;
}) {
  const app = dict.messengerApp;

  return (
    <Section band>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading title={app.galleryTitle} description={app.galleryDescription} />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {showDownload ? (
            <Button href={app.href} className="min-w-[12rem]">
              {app.button}
            </Button>
          ) : null}
          {showModuleLink ? (
            <Link href={`/${locale}/modulos/mensajeria`} className="text-link text-sm">
              {dict.ui.seeModule} →
            </Link>
          ) : null}
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {app.screens.map((screen, index) => (
          <Reveal key={screen.src} delay={index * 70}>
            <figure className="mx-auto w-full max-w-[12.5rem] sm:max-w-[13.5rem]">
              <div className="overflow-hidden rounded-[1.65rem] border border-border bg-ink p-[0.45rem] shadow-md">
                <div className="overflow-hidden rounded-[1.25rem] bg-surface">
                  <Image
                    src={screen.src}
                    alt={screen.label}
                    width={390}
                    height={844}
                    className="h-auto w-full object-cover object-top"
                    sizes="(max-width: 640px) 200px, 216px"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-sm font-semibold text-ink">
                {screen.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {app.videos?.length ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {app.videos.map((video, index) => (
            <Reveal key={video.youtubeId} delay={index * 80}>
              <figure>
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-ink shadow-md">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-sm font-semibold text-ink">
                  {video.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      ) : null}

      {showDownload ? (
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">{app.note}</p>
      ) : null}
    </Section>
  );
}
