"use client";

import { useCallback, useState } from "react";
import type { ChatMessage } from "../types/chat";
import type { Candidate, Clue } from "../types/investigation";

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    role: "ai",
    content:
      "Tell me anything you remember about the place. It doesn't have to be exact.",
  },
];

interface InvestigationResponse {
  reply: string;
  clues: Clue[];
  candidates: Candidate[];
}

export function useInvestigationChat(
  setClues: React.Dispatch<React.SetStateAction<Clue[]>>,
  setCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>
) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isAiTyping, setIsAiTyping] = useState(false);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmedContent = content.trim();

      if (!trimmedContent || isAiTyping) {
        return;
      }

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmedContent,
      };

      setMessages((previous) => [
        ...previous, userMessage,
      ]);
      setIsAiTyping(true);

      try {
        const response = await fetch(
          "/api/investigate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: trimmedContent,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to investigate location"
          );
        }

        const data: InvestigationResponse = await response.json();

        setClues((previousClues) => {
          const existingIds = new Set(
            previousClues.map((clue) => clue.id)
          );

          const newClues = data.clues.filter(
            (clue) => !existingIds.has(clue.id)
          );

          return [ ...previousClues, ...newClues ];
        });

        setCandidates(data.candidates.slice(0, 5));

        const aiMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "ai",
          content: data.reply,
        };

        setMessages((previous) => [
          ...previous, aiMessage,
        ]);
      } catch (error) {
        console.error(error);

        const errorMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "ai",
          content:
            "Sorry, I couldn't analyze that clue. Please try again.",
        };

        setMessages((previous) => [
          ...previous, errorMessage,
        ]);
      } finally {
        setIsAiTyping(false);
      }
    },
    [isAiTyping, setCandidates, setClues]
  );

  return { messages, isAiTyping, sendMessage };
}