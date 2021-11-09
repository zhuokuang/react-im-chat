import { Message } from "@/typings";
interface ContentProps {
  messages: Message[];
}

export const Content = ({ messages }: ContentProps) => {
  return (
    <div className="content">
      {messages.map((message) => (
        <div className="message">{message.content}</div>
      ))}
    </div>
  );
};
