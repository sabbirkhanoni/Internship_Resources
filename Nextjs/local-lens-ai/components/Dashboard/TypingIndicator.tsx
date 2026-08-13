import React from "react";

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md bg-zinc-100 px-4 py-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[9px] text-white">
            ✦
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
            WhereWasIt AI
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;