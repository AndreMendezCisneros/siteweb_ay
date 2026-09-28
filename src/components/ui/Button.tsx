import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-background shadow-[6px_6px_0_0_var(--accent)] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-accent hover:text-ink hover:shadow-[3px_3px_0_0_var(--ink)] focus-visible:outline-ink",
  secondary:
    "bg-background text-ink border-2 border-ink hover:bg-accent hover:text-ink focus-visible:outline-ink",
  ghost:
    "bg-transparent text-ink border-2 border-transparent hover:border-ink focus-visible:outline-ink",
  onDark:
    "bg-background text-ink border-2 border-ink hover:bg-accent focus-visible:outline-ink",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-5 py-3 text-sm font-semibold transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & Omit<ComponentProps<"button">, "className">;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isFile = /\.(apk|pdf|zip|png|jpe?g|webp)$/i.test(href);
    const isExternal = /^https?:\/\//i.test(href);
    if (isFile || isExternal) {
      return (
        <a
          href={href}
          className={classes}
          download={isFile ? "" : undefined}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
