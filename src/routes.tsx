import { lazy } from "react";
interface Menu {
  key: string;
  name: string;
  component?: any;
  children?: Menu;
}

const routes: Menu[] = [
  {
    key: "/login",
    name: "登录",
    component: lazy(() => import("@/login")),
  },
  {
    key: "/chat",
    name: "聊天",
    component: lazy(() => import("@/chat")),
  },
];

export default routes;
