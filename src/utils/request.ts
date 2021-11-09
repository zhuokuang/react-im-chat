export const request = (url: string, data: Record<string, any> = {}) => {
  const searchArr: string[] = [];
  Object.keys(data).forEach((key) => {
    const value: any = data[key];
    searchArr.push(`${key}=${value}`);
  });
  return fetch(`${url}?${searchArr.join("&")}`).then((res) => res.json());
};
