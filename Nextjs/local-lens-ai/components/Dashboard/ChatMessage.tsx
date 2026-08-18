import { MessageRole } from "../../types/chat";

interface ChatMessageProps {
  role: MessageRole;
  content: string;
}

function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"
        }`}
    >
      <div
        className={`max-w-[86%] rounded-2xl px-4 py-2 ${isUser
            ? "rounded-br-md bg-zinc-900 text-white"
            : "rounded-bl-md bg-zinc-100 text-zinc-700"
          }`}
      >
        {!isUser && (
          <div className="mb-1 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[9px] text-white">
              ✦
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Find AI
            </span>
          </div>
        )}
        <p className="text-sm leading-6">
          {content}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;