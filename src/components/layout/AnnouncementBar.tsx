import Link from "next/link";

export function AnnouncementBar({
  text,
  cta,
  href,
}: {
  text: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="bg-accent-2 text-white">
      <div className="mx-auto flex max-w-[var(--container)] flex-col items-center justify-center gap-2 px-5 py-2 text-center text-sm sm:flex-row sm:gap-4">
        <p className="font-medium">{text}</p>
        <Link
          href={href}
          className="font-semibold underline decoration-white/70 decoration-1 underline-offset-2 hover:decoration-white hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {cta} →
        </Link>
      </div>
    </div>
  );
}
