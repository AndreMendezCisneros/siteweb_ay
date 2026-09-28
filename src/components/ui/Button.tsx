import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary shadow-sm",
  secondary:
    "bg-transparent text-primary border border-border hover:border-primary hover:bg-primary-soft focus-visible:outline-primary",
  ghost:
    "bg-transparent text-ink hover:bg-primary-soft focus-visible:outline-primary",
  onDark:
    "bg-white text-ink hover:bg-primary-soft focus-visible:outline-white shadow-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

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
