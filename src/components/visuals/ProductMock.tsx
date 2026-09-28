export function ProductMock({ caption }: { caption?: string }) {
  return (
    <figure>
      <div className="ink-frame bg-surface p-5">
        <p className="kicker">AsisAcademy</p>
        <p className="mt-3 font-display text-2xl font-semibold text-ink">98%</p>
        <p className="mt-2 text-sm text-muted">{caption}</p>
      </div>
    </figure>
  );
}
