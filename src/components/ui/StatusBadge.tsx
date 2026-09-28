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
      className={`inline-flex items-center rounded-[4px] border px-2 py-0.5 text-[0.7rem] font-semibold ${
        isAvailable
          ? "border-accent-2 bg-primary-soft text-accent-2"
          : "border-border bg-background text-muted"
      }`}
    >
      {isAvailable ? availableLabel : comingLabel}
    </span>
  );
}
