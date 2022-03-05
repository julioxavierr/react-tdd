import { NewMessageForm } from "./NewMessageForm";

export function App() {
  const handleSend = (newMessage) => {};

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
    </div>
  );
}
