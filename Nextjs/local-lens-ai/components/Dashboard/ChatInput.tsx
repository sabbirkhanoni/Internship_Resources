function ChatInput() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-3xl px-4 pb-4">
        <div className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-900/10">
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900"
            title="Upload a photo"
          >
            ＋
          </button>

          <input
            type="text"
            placeholder="Tell me what you remember..."
            className="h-10 min-w-0 flex-1 bg-transparent px-2 text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
          />

          <button
            type="button"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900 sm:flex"
            title="Voice input"
          >
            ◉
          </button>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white transition hover:bg-zinc-700"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;