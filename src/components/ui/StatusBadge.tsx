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
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        isAvailable
          ? "bg-primary-soft text-primary"
          : "bg-border/60 text-muted"
      }`}
    >
      {isAvailable ? availableLabel : comingLabel}
    </span>
  );
}
