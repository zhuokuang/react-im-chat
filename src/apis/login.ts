import { request } from "@/utils/request";

const apiPath = process.env.REACT_APP_API_URL;

export const postLogin = (params: { username: string; password: string }) =>
  request(`${apiPath}/login`, { method: "POST", params });
