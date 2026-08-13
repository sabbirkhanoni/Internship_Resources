import ChatMessage from "./ChatMessage";
import QuickReplies from "./QuickReplies";
import ClueList from "./ClueList";
import CandidateList from "./CandidateList";

function InvestigationPanel() {
  return (
    <aside className="flex h-full min-h-0 flex-col border-l border-zinc-200 bg-white">
      {/* Header */}
      <div className="border-b border-zinc-100 px-6 py-2">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="mt-1 text-sm font-semibold tracking-tight">
              Let's find that place.
            </h2>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full w-[68%] rounded-full bg-zinc-900" />
          </div>

          <span className="whitespace-nowrap text-[11px] font-medium text-zinc-400">
            4 clues
          </span>
        </div>
      </div>

      {/* Conversation */}
      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 pb-32">
        <div className="space-y-5">
          <ChatMessage
            type="ai"
            message="Tell me anything you remember about the place. It doesn't have to be exact."
          />

          <ChatMessage
            type="user"
            message="There was a large lake and a road beside it."
          />

          <ChatMessage
            type="ai"
            message="That's useful. Do you remember if there was a bridge nearby?"
          />

          <QuickReplies
            options={[
              "Yes, there was",
              "No",
              "I'm not sure",
            ]}
          />

          <ChatMessage
            type="user"
            message="Yes, I remember a big bridge."
          />

          <ChatMessage
            type="ai"
            message="Great. That narrows it down. I've found a few possible locations."
          />
        </div>

        <ClueList />

        <CandidateList />
      </div>
    </aside>
  );
}

export default InvestigationPanel;