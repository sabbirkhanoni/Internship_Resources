export type MessageRole = "user" | "ai";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
}

export interface QuickReply {
  id: string;
  label: string;
}