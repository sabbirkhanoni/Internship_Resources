
'use client';

import {
  FormEvent,
  KeyboardEvent,
  useState,
} from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = value.trim();

    if (!message || disabled) {
      return;
    }

    onSend(message);
    setValue("");
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const message = value.trim();

      if (!message || disabled) {
        return;
      }

      onSend(message);
      setValue("");
    }
  };

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-3xl px-4 pb-4">
        <form
          onSubmit={handleSubmit}
          className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-900/10"
        >
          <button
            type="button"
            disabled={disabled}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-40"
          >
            ＋
          </button>

          <input
            type="text"
            value={value}
            onChange={(event) =>
              setValue(event.target.value)
            }
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={
              disabled
                ? "AI is thinking..."
                : "Tell me what you remember..."
            }
            className="h-10 min-w-0 flex-1 bg-transparent px-2 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
          />

          <button
            type="submit"
            disabled={!value.trim() || disabled}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ↑
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatInput;