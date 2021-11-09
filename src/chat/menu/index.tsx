import { User } from "@/typings";
import "./index.css";

interface MenuProps {
  userList: User[];
}

export const Menu = ({ userList }: MenuProps) => {
  return (
    <div className="menu">
      <div className="menu-header">在线成员({userList.length})</div>
      {userList.map((user) => (
        <div key={user.id} className="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};
