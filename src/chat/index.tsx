import { Menu } from "./menu";
import { Content } from "./content";
import { useEffect, useState } from "react";
import { User, Message } from "@/typings";
import { getUsers, getMessage } from "@/apis";
import "./index.css";

const Chat = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    getUsers().then((res) => {
      setUserList(res);
    });
    getMessage().then((res) => {
      setMessages(res);
    });
  }, []);
  return (
    <div className="chat">
      <Menu userList={userList} />
      <Content messages={messages} />
    </div>
  );
};

export default Chat;
