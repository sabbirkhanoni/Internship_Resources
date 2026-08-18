import type { Candidate } from "../../types/investigation";
import CandidateCard from "./CandidateCard";

interface CandidateListProps {
  candidates: Candidate[];
}

function CandidateList({
  candidates,
}: CandidateListProps) {
  return (
    <section className="border-t border-zinc-100 pt-1">
      <div className="mb-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
          Possible Matches
        </h3>
      </div>

      <div className="space-y-3 h-44 overflow-y-auto">
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