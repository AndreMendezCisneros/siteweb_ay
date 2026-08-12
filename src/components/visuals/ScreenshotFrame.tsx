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
      <div className="overflow-hidden rounded-[1.1rem] border border-border bg-surface shadow-md">
        <div className="flex items-center gap-1.5 border-b border-border bg-primary-soft/60 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-primary/40" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-accent/50" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
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
