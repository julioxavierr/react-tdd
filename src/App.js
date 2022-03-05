import { useState } from "react";
import { NewMessageForm } from "./NewMessageForm";
import { MessageList } from "./MessageList";

export function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
}
