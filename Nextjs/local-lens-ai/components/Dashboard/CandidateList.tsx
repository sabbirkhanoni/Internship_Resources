import CandidateCard, {
  Candidate,
} from "./CandidateCard";

function CandidateList() {
  const candidates: Candidate[] = [
    {
      rank: 1,
      name: "Hatirjheel",
      location: "Dhaka, Bangladesh",
      match: 87,
      clues: ["Lake", "Bridge", "Urban"],
      featured: true,
    },
    {
      rank: 2,
      name: "Dhanmondi Lake",
      location: "Dhaka, Bangladesh",
      match: 72,
      clues: ["Lake", "Urban"],
      featured: false,
    },
    {
      rank: 3,
      name: "Gulshan Lake",
      location: "Dhaka, Bangladesh",
      match: 61,
      clues: ["Lake", "Urban"],
      featured: false,
    },
  ];

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
            key={candidate.name}
            candidate={candidate}
          />
        ))}
      </div>
    </section>
  );
}

export default CandidateList;