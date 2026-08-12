"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { Dict } from "@/lib/i18n";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = { name?: string; email?: string; school?: string; need?: string };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm({
  t,
  submitLabel,
}: {
  t: Dict["form"];
  submitLabel: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [mailto, setMailto] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setMailto(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      school: String(data.get("school") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      need: String(data.get("need") || "").trim(),
    };

    const next: FieldErrors = {};
    if (!payload.name) next.name = t.errors.name;
    if (!payload.email) next.email = t.errors.email;
    else if (!isValidEmail(payload.email)) next.email = t.errors.emailInvalid;
    if (!payload.school) next.school = t.errors.school;
    if (!payload.need) next.need = t.errors.need;
    setErrors(next);
    if (Object.keys(next).length) {
      nameRef.current?.focus();
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok: boolean; message?: string; mailto?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || t.errors.generic);
      setStatus("success");
      setMailto(result.mailto || null);
      setMessage(t.success.body);
      form.reset();
      setErrors({});
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : t.errors.generic);
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-[var(--radius-md)] border bg-surface px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/20";
  const ok = "border-border focus:border-primary";
  const err = "border-error focus:border-error";

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-success/30 bg-primary-soft/50 p-6" role="status">
        <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
          {t.success.title}
        </h3>
        <p className="mt-3 text-sm text-muted">{message}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {mailto ? (
            <a
              href={mailto}
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface px-5 py-3 text-sm font-semibold text-primary"
            >
              {t.success.openEmail}
            </a>
          ) : null}
          <Button type="button" variant="secondary" onClick={() => setStatus("idle")}>
            {t.success.another}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          {t.name}
        </label>
        <input ref={nameRef} id="name" name="name" required className={`${fieldClass} ${errors.name ? err : ok}`} />
        {errors.name ? <p className="mt-1.5 text-sm text-error">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          {t.email}
        </label>
        <input id="email" name="email" type="email" required className={`${fieldClass} ${errors.email ? err : ok}`} />
        {errors.email ? <p className="mt-1.5 text-sm text-error">{errors.email}</p> : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="school" className="text-sm font-medium text-ink">
            {t.school}
          </label>
          <input id="school" name="school" required className={`${fieldClass} ${errors.school ? err : ok}`} />
          {errors.school ? <p className="mt-1.5 text-sm text-error">{errors.school}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            {t.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={`${fieldClass} ${ok}`} />
        </div>
      </div>
      <div>
        <label htmlFor="need" className="text-sm font-medium text-ink">
          {t.need}
        </label>
        <textarea
          id="need"
          name="need"
          required
          rows={5}
          placeholder={t.needPlaceholder}
          className={`${fieldClass} ${errors.need ? err : ok}`}
        />
        {errors.need ? <p className="mt-1.5 text-sm text-error">{errors.need}</p> : null}
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? t.sending : submitLabel}
      </Button>
      {status === "error" && message ? (
        <p role="alert" className="text-sm text-error">
          {message}
        </p>
      ) : null}
    </form>
  );
}
