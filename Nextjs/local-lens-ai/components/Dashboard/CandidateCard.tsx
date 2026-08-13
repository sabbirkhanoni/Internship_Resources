export interface Candidate {
  rank: number;
  name: string;
  location: string;
  match: number;
  clues: string[];
  featured: boolean;
}

interface CandidateCardProps {
  candidate: Candidate;
}

function CandidateCard({
  candidate,
}: CandidateCardProps) {
  return (
    <button
      type="button"
      className={`w-full rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        candidate.featured
          ? "border-zinc-900 bg-zinc-900 text-white"
          : "border-zinc-200 bg-white hover:border-zinc-300"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                candidate.featured
                  ? "bg-white/10 text-white"
                  : "bg-zinc-100 text-zinc-500"
              }`}
            >
              {candidate.rank}
            </span>

            <h4 className="text-sm font-semibold">
              {candidate.name}
            </h4>
          </div>

          <p className="mt-1 pl-8 text-[11px] text-zinc-400">
            {candidate.location}
          </p>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold">
            {candidate.match}%
          </p>

          <p
            className={`text-[9px] font-medium uppercase tracking-wider ${
              candidate.featured
                ? "text-zinc-500"
                : "text-zinc-400"
            }`}
          >
            match
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 pl-8">
        {candidate.clues.map((clue) => (
          <span
            key={clue}
            className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
              candidate.featured
                ? "bg-white/10 text-zinc-300"
                : "bg-zinc-100 text-zinc-500"
            }`}
          >
            ✓ {clue}
          </span>
        ))}
      </div>
    </button>
  );
}

export default CandidateCard;