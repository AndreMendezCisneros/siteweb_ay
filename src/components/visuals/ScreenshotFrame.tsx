import Image from "next/image";

export function ScreenshotFrame({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="ink-frame">
        <div className="flex items-center gap-2 border-b border-border bg-background px-3 py-2">
          <span className="text-[0.65rem] text-muted">{alt}</span>
        </div>
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={800}
          priority={priority}
          className="h-auto w-full object-cover object-top"
        />
      </div>
      {caption ? <figcaption className="mt-3 text-xs text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
