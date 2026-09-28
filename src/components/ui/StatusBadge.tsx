export function StatusBadge({
  status,
  availableLabel,
  comingLabel,
}: {
  status: "available" | "coming-soon";
  availableLabel: string;
  comingLabel: string;
}) {
  const isAvailable = status === "available";

  return (
    <span
      className={`inline-flex items-center rounded-[2px] border px-2 py-0.5 font-mono text-xs font-medium ${
        isAvailable
          ? "border-accent-2 bg-primary-soft text-accent-2"
          : "border-border bg-background text-muted"
      }`}
    >
      {isAvailable ? availableLabel : comingLabel}
    </span>
  );
}
