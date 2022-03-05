export const MessageList = ({ data }) => (
  <ul>
    {data.map((message) => (
      <li key={message}>{message}</li>
    ))}
  </ul>
);
