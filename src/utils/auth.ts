import { postLogin } from "@/apis";

const TOKEN_KEY = "__login_with_token__";

export const login = (params: { username: string; password: string }) => {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem(TOKEN_KEY)) {
      resolve("already login!");
    }
    postLogin(params)
      .then((res) => {
        console.log("login with", res.user);
        window.localStorage.setItem("__login_with_token__", "RANRAN");
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => Boolean(window.localStorage.getItem(TOKEN_KEY));
