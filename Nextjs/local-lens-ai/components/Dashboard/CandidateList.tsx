import type { Candidate } from "../../types/investigation";
import CandidateCard from "./CandidateCard";

interface CandidateListProps {
  candidates: Candidate[];
}

function CandidateList({
  candidates,
}: CandidateListProps) {
  return (
    <section className="mt-8 border-t border-zinc-100 pt-6">
      <div className="mb-4">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
          Possible Matches
        </h3>

        <p className="mt-1 text-xs text-zinc-400">
          Based on the clues you've provided.
        </p>
      </div>

      <div className="space-y-3">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
          />
        ))}
      </div>
    </section>
  );
}

export default CandidateList;