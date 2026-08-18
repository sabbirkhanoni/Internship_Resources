"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import QuickReplies from "./QuickReplies";
import ClueList from "./ClueList";
import CandidateList from "./CandidateList";
import TypingIndicator from "./TypingIndicator";
import type { ChatMessage as ChatMessageType } from "../../types/chat";
import type { Clue, Candidate } from "../../types/investigation";

interface InvestigationPanelProps {
  messages: ChatMessageType[];
  isAiTyping: boolean;
  onSendMessage: (message: string) => void;
  clues: Clue[];
  candidates: Candidate[];
}

function InvestigationPanel({ messages, isAiTyping, onSendMessage, clues, candidates }: InvestigationPanelProps) {

  const bottomRef = useRef<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isAiTyping]);

  const handleSendMessage = (message: string) => {
    onSendMessage(message);
  };

  return (
    <aside className="flex h-full min-h-0 flex-col border-l border-zinc-200 bg-white">

      {/* Conversation */}
      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 pb-32">
        <div className="space-y-5">

          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              role={message.role}
              content={message.content}
            />
          ))}

          {messages.length === 3 && !isAiTyping && (
            <QuickReplies
              options={[
                "Yes, there was",
                "No",
                "I'm not sure",
              ]}
              onSelect={handleSendMessage}
              disabled={isAiTyping}
            />
          )}

          {isAiTyping && <TypingIndicator />}

          <div ref={bottomRef} />
        </div>

        {/* Collected Clues */}
        {clues.length > 0 && (
          <ClueList clues={clues} />
        )}

        {/* Possible Matches */}
        {candidates.length > 0 && (
          <div className="shrink-0 border-t border-zinc-200 bg-white">
            <CandidateList candidates={candidates} />
          </div>
        )}
      </div>
    </aside>
  );
}

export default InvestigationPanel;