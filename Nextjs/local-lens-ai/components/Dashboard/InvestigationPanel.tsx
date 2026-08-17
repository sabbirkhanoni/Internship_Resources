'use client';

import { useEffect, useRef, useState } from "react";

import ChatMessage from "./ChatMessage";
import QuickReplies from "./QuickReplies";
import ClueList from "./ClueList";
import CandidateList from "./CandidateList";
import TypingIndicator from "./TypingIndicator";
import { useInvestigationChat } from "../../hooks/useInvestigationChat";
import type { ChatMessage as ChatMessageType } from "../../types/chat";
import type { Clue, Candidate } from "../../types/investigation";


interface InvestigationPanelProps {
    messages: ChatMessageType[];
    isAiTyping: boolean;
    onSendMessage: (message: string) => void;
}

function InvestigationPanel({
    onSendMessage,
}: InvestigationPanelProps) {

    const [clues, setClues] = useState<Clue[]>([
        {
            id: "lake",
            label: "Large lake",
            confirmed: true,
        },
        {
            id: "bridge",
            label: "Large bridge",
            confirmed: true,
        },
        {
            id: "urban",
            label: "Urban area",
            confirmed: true,
        },
        {
            id: "building",
            label: "Nearby building",
            confirmed: false,
        },
    ]);

    const [candidates, setCandidates] = useState<Candidate[]>([
        {
            id: "hatirjheel",
            rank: 1,
            name: "Hatirjheel",
            location: "Dhaka, Bangladesh",
            position: [23.7772, 90.4125],
            match: 87,
            clues: ["Lake", "Bridge", "Urban"],
            featured: true,
        },
        {
            id: "dhanmondi-lake",
            rank: 2,
            name: "Dhanmondi Lake",
            location: "Dhaka, Bangladesh",
            position: [23.7465, 90.376],
            match: 72,
            clues: ["Lake", "Urban"],
            featured: false,
        },
        {
            id: "gulshan-lake",
            rank: 3,
            name: "Gulshan Lake",
            location: "Dhaka, Bangladesh",
            position: [23.7937, 90.4152],
            match: 61,
            clues: ["Lake", "Urban"],
            featured: false,
        },
    ]);

    const {
        messages,
        isAiTyping,
        sendMessage,
    } = useInvestigationChat();

    const bottomRef = useRef<HTMLDivElement | null>(
        null
    );

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isAiTyping]);

    const handleSendMessage = (message: string) => {
        sendMessage(message);
        onSendMessage(message);
    };

    return (
        <aside className="flex h-full min-h-0 flex-col border-l border-zinc-200 bg-white">
            {/* Header */}
            <div className="border-b border-zinc-100 px-6 py-3">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-sm font-semibold tracking-tight">
                            Let's find that place.
                        </h2>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-100">
                        <div className="h-full w-[20%] rounded-full bg-zinc-900 transition-all duration-500" />
                    </div>

                    <span className="whitespace-nowrap text-[11px] font-medium text-zinc-400">
                        {messages.filter(
                            (message) => message.role === "user"
                        ).length}{" "}
                        clues
                    </span>
                </div>
            </div>

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

                <ClueList clues={clues} />

                <CandidateList candidates={candidates} />
            </div>
        </aside>
    );
}

export default InvestigationPanel;