interface MapMarkerProps {
  className: string;
  label: string;
  active?: boolean;
}

function MapPanel() {
  return (
    <section className="relative h-full min-h-[450px] overflow-hidden bg-[#e8e7e2]">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[15%] h-[35%] w-[24%] rounded-[50%] bg-[#d5ddd9]" />

        <div className="absolute bottom-[8%] right-[12%] h-[28%] w-[30%] rounded-[50%] bg-[#d9dfd9]" />

        <div className="absolute left-[-10%] top-[43%] h-[3px] w-[120%] rotate-[-8deg] bg-white" />

        <div className="absolute left-[-10%] top-[65%] h-[3px] w-[120%] rotate-[14deg] bg-white" />

        <div className="absolute left-[45%] top-[-10%] h-[120%] w-[3px] rotate-[17deg] bg-white" />

        <div className="absolute left-[70%] top-[-10%] h-[120%] w-[2px] rotate-[-22deg] bg-white" />

        <div className="absolute left-[42%] top-[18%] h-20 w-28 rounded-lg bg-[#deded9]" />

        <div className="absolute left-[62%] top-[28%] h-24 w-32 rounded-lg bg-[#dfdfda]" />

        <div className="absolute bottom-[25%] left-[25%] h-24 w-36 rounded-lg bg-[#dfdfda]" />

        <div className="absolute bottom-[25%] right-[8%] h-20 w-28 rounded-lg bg-[#deded9]" />
      </div>

      <div className="absolute left-5 top-5 z-10">
        <div className="rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Investigation Area
          </p>

          <p className="mt-1 text-sm font-semibold">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <MapMarker
        className="left-[27%] top-[36%]"
        label="72%"
      />

      <MapMarker
        className="left-[56%] top-[48%]"
        label="87%"
        active
      />

      <MapMarker
        className="left-[72%] top-[67%]"
        label="61%"
      />

      <div className="absolute bottom-5 right-5">
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-white text-lg shadow-md">
          ⊙
        </button>
      </div>

      <div className="absolute bottom-5 left-5">
        <div className="rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <p className="text-[11px] text-zinc-400">
            Possible locations
          </p>

          <p className="mt-0.5 text-sm font-semibold">
            3 candidates found
          </p>
        </div>
      </div>
    </section>
  );
}

function MapMarker({
  className,
  label,
  active = false,
}: MapMarkerProps) {
  return (
    <div className={`absolute ${className}`}>
      {active && (
        <div className="absolute -inset-3 animate-pulse rounded-full bg-zinc-900/10" />
      )}

      <div
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white shadow-lg ${
          active ? "bg-zinc-900" : "bg-zinc-500"
        }`}
      >
        <span className="text-[10px] font-bold text-white">
          {label}
        </span>
      </div>
    </div>
  );
}

export default MapPanel;