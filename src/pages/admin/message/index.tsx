import { ChatMain } from "./chat-main";
import { ChatSidebar } from "./chat-sidebar";

export default function Home() {
  return (
    <div className="flex h-full">
      <ChatSidebar />
      <ChatMain />
    </div>
  );
}