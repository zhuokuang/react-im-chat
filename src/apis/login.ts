import { request } from "@/utils/request";

const apiPath = process.env.REACT_APP_API_URL;

export const login = (params: { username: string; password: string }) =>
  request(`${apiPath}/login`, { method: "POST", params });
