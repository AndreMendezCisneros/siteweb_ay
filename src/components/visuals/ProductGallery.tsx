import { Reveal } from "@/components/ui/Reveal";
import { ScreenshotFrame } from "@/components/visuals/ScreenshotFrame";
import { productScreens } from "@/lib/productImages";

type ShotLabel = { key: string; label: string };

export function ProductGallery({
  labels,
  caption,
}: {
  labels: ShotLabel[];
  caption?: string;
}) {
  const byKey = Object.fromEntries(labels.map((l) => [l.key, l.label]));

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {productScreens.map((shot, index) => (
        <Reveal key={shot.src} delay={index * 50}>
          <ScreenshotFrame
            src={shot.src}
            alt={byKey[shot.key] ?? shot.key}
            caption={caption ? `${byKey[shot.key] ?? shot.key} · ${caption}` : byKey[shot.key]}
          />
        </Reveal>
      ))}
    </div>
  );
}
