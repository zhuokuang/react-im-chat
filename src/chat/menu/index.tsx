// @ts-ignore
import { User } from "@/typings";

interface MenuProps {
  userList: User[];
}

export const Menu = ({ userList }: MenuProps) => {
  return (
    <div className="menu">
      {userList.map((user) => (
        <div key={user.id} className="user">
          {user.name}
        </div>
      ))}
    </div>
  );
};
