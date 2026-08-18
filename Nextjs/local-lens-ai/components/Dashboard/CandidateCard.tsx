import { Candidate } from "@/types/investigation";

interface CandidateCardProps {
    candidate: Candidate;
}

function CandidateCard({ candidate }: CandidateCardProps) {
    return (
        <div
            className={`w-full rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-md
                "border-zinc-900 bg-zinc-900 text-white" }`} >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-sm text-white font-semibold">
                            {candidate.name}
                        </h4>
                    </div>

                    <p className="mt-1 pl-8 text-[11px] text-zinc-400">
                        {candidate.location}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 pl-8">
                {candidate.clues.map((clue) => (
                    <span
                        key={clue}
                        className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${candidate.featured
                            ? "bg-white/10 text-zinc-300"
                            : "bg-zinc-100 text-zinc-500"
                            }`}
                    >
                        ✓ {clue}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CandidateCard;