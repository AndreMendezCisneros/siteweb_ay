import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary",
  secondary:
    "bg-surface text-ink border border-border hover:border-ink hover:bg-background focus-visible:outline-ink",
  ghost:
    "bg-transparent text-ink border border-transparent hover:border-border focus-visible:outline-ink",
  onDark:
    "bg-surface text-ink border border-border hover:bg-background focus-visible:outline-white",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[4px] px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

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
