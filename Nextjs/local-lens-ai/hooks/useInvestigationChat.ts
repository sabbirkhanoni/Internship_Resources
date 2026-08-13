'use client';

import { useCallback, useState } from "react";
import type { ChatMessage } from "../types/chat";

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    role: "ai",
    content:
      "Tell me anything you remember about the place. It doesn't have to be exact.",
  },
];

export function useInvestigationChat() {
  const [messages, setMessages] =
    useState<ChatMessage[]>(initialMessages);

  const [isAiTyping, setIsAiTyping] =
    useState(false);

  const sendMessage = useCallback((content: string) => {
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
      ...previous,
      userMessage,
    ]);

    setIsAiTyping(true);

    // Temporary dummy AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "ai",
        content:
          "That's useful. Do you remember anything else about the area, such as a bridge, building, road, park, or landmark?",
      };

      setMessages((previous) => [
        ...previous,
        aiMessage,
      ]);

      setIsAiTyping(false);
    }, 1200);
  }, [isAiTyping]);

  return {
    messages,
    isAiTyping,
    sendMessage,
  };
}