// @ts-ignore
import { request } from "@/utils/request";
// @ts-ignore
import { User } from "@/typings/user";
const apiPath = process.env.REACT_APP_API_URL;

export const getUsers = (): Promise<User[]> => request(`${apiPath}/users`);
