import { Message } from "@/typings";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { isLogin, logout } from "@/utils/auth";
import "./index.css";

interface ContentProps {
  messages: Message[];
}

export const Content = ({ messages = [] }: ContentProps) => {
  const history = useHistory();

  useEffect(() => {
    if (!isLogin()) {
      history.replace("./login");
    }
  }, [history]);

  const handleLogout = useCallback(() => {
    logout();
    history.replace("./login");
  }, [history]);

  return (
    <div className="content">
      <div className="content-header">
        <div>群聊({messages.length})</div>
        <div className="logout" onClick={handleLogout}>
          登出
        </div>
      </div>
      <div className="msg-list">
        {messages.map((message) => (
          <div key={message.id} className="msg-item">
            <div className="msg-time"></div>
            <div className="msg-text">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="edit-content">
        <div className="toolbar"></div>
        <div className="textarea">
          <textarea placeholder="请输入聊天内容"></textarea>
        </div>
        <div className="send">
          <span className="send-tips">按 ENTER 键发送</span>
          <button className="btn">发送</button>
        </div>
      </div>
    </div>
  );
};
