interface Clue {
  label: string;
  confirmed: boolean;
}

function ClueList() {
  const clues: Clue[] = [
    {
      label: "Large lake",
      confirmed: true,
    },
    {
      label: "Large bridge",
      confirmed: true,
    },
    {
      label: "Urban area",
      confirmed: true,
    },
    {
      label: "Nearby building",
      confirmed: false,
    },
  ];

  return (
    <section className="mt-8 border-t border-zinc-100 pt-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
          Collected Clues
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {clues.map((clue) => (
          <div
            key={clue.label}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium ${
              clue.confirmed
                ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                : "border-amber-100 bg-amber-50 text-amber-700"
            }`}
          >
            <span>
              {clue.confirmed ? "✓" : "?"}
            </span>

            {clue.label}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClueList;