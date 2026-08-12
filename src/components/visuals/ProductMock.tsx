export function ProductMock({ caption }: { caption?: string }) {
  const rows = [
    { label: "Entrada", time: "07:28", state: "OK" },
    { label: "Tardanza", time: "07:41", state: "Rev." },
    { label: "Salida", time: "13:05", state: "OK" },
    { label: "Incidencia", time: "13:18", state: "Seg." },
  ];

  return (
    <figure className="relative">
      <div
        className="overflow-hidden rounded-[1.1rem] border border-white/15 bg-white/10 shadow-md backdrop-blur-md"
        aria-hidden
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="font-[family-name:var(--font-syne)] text-sm font-semibold text-white">
              AsisAcademy
            </span>
          </div>
          <span className="text-xs text-white/55">Panel</span>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_0.9fr]">
          <div className="space-y-2">
            {rows.map((row) => (
              <div
                key={`${row.label}-${row.time}`}
                className="flex items-center justify-between rounded-[0.65rem] bg-white/8 px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium text-white">{row.label}</p>
                  <p className="text-xs text-white/55">{row.time}</p>
                </div>
                <span className="rounded-full bg-white/12 px-2 py-0.5 text-[0.7rem] font-semibold text-white/85">
                  {row.state}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between rounded-[0.75rem] bg-ink/35 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Hoy</p>
              <p className="mt-2 font-[family-name:var(--font-syne)] text-2xl font-semibold text-white">
                Puerta en orden
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Escaneo, incidencias y portal familiar en una sola fuente de verdad.
              </p>
            </div>
            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-2/3 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
      {caption ? <figcaption className="mt-3 text-xs text-white/55">{caption}</figcaption> : null}
    </figure>
  );
}
