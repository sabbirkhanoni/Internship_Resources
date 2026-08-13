import ChatInput from "@/components/Dashboard/ChatInput";
import DashHeader from "@/components/Dashboard/DashHeader";
import InvestigationPanel from "@/components/Dashboard/InvestigationPanel";
import MapPanel from "@/components/Dashboard/MapPanel";


function Dashboard() {
  return (
    <div className="h-screen overflow-hidden bg-[#f7f7f5] text-zinc-900">
      <DashHeader />

      <main className="relative h-[calc(100vh-72px)]">
        <div className="grid h-full grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
          <MapPanel />
          <InvestigationPanel />
        </div>

        <ChatInput />
      </main>
    </div>
  );
}

export default Dashboard;