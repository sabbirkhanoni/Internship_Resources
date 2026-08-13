interface QuickRepliesProps {
  options: string[];
}

function QuickReplies({
  options,
}: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2 pl-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-xs font-medium text-zinc-600 transition hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuickReplies;