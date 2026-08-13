"use client";

import dynamic from "next/dynamic";

import ChatInput from "@/components/Dashboard/ChatInput";
import DashHeader from "@/components/Dashboard/DashHeader";
import InvestigationPanel from "@/components/Dashboard/InvestigationPanel";
import { useInvestigationChat } from "@/hooks/useInvestigationChat";

const MapPanel = dynamic(
  () => import("@/components/Dashboard/MapPanel"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[450px] items-center justify-center bg-[#e8e7e2]">
        <p className="text-sm text-zinc-400">
          Loading map...
        </p>
      </div>
    ),
  }
);

function Dashboard() {
  const {
    messages,
    isAiTyping,
    sendMessage,
  } = useInvestigationChat();

  return (
    <div className="h-screen overflow-hidden bg-[#f7f7f5] text-zinc-900">
      <DashHeader />

      <main className="relative h-[calc(100vh-72px)]">
        <div className="grid h-full grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
          
          {/* Real Map */}
          <MapPanel />

          {/* AI Panel */}
          <div className="relative min-h-0">
            <InvestigationPanel
              messages={messages}
              isAiTyping={isAiTyping}
              onSendMessage={sendMessage}
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