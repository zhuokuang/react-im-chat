// @ts-ignore
import { request } from "@/utils/request";
// @ts-ignore
import { Message } from "@/typings/message";
const apiPath = process.env.REACT_APP_API_URL;

export const getMessage = (): Promise<Message[]> =>
  request(`${apiPath}/messages`);
