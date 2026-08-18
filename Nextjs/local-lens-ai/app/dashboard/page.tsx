"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import ChatInput from "@/components/Dashboard/ChatInput";
import DashHeader from "@/components/Dashboard/DashHeader";
import InvestigationPanel from "@/components/Dashboard/InvestigationPanel";
import { useInvestigationChat } from "@/hooks/useInvestigationChat";
import type { Candidate, Clue } from "@/types/investigation";

const MapPanel = dynamic(
  () => import("@/components/Dashboard/MapPanel"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-112.5 items-center justify-center bg-[#e8e7e2]">
        <p className="text-sm text-zinc-400">
          Loading map...
        </p>
      </div>
    ),
  }
);

function Dashboard() {
  const [clues, setClues] = useState<Clue[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const { messages, isAiTyping, sendMessage } = useInvestigationChat(setClues,setCandidates);

  return (
    <div className="h-screen overflow-hidden bg-[#f7f7f5] text-zinc-900">
      <DashHeader />

      <main className="relative h-[calc(100vh-72px)]">
        <div className="grid h-full grid-cols-1 lg:grid-cols-[1.35fr_1fr]">

          {/* Map */}
          <MapPanel candidates={candidates} />

          {/* AI Panel */}
          <div className="relative min-h-0">
            <InvestigationPanel
              messages={messages}
              isAiTyping={isAiTyping}
              onSendMessage={sendMessage}
              clues={clues}
              candidates={candidates}
            />

            <ChatInput
              onSend={sendMessage}
              disabled={isAiTyping}
            />
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;