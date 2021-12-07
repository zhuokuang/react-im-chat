export const request = (url: string, data: Record<string, any> = {}) => {
  const { method = "GET", params = {} } = data;

  if (method === "GET") {
    const searchArr: string[] = [];
    Object.keys(params).forEach((key) => {
      const value: any = params[key];
      searchArr.push(`${key}=${value}`);
    });
    return fetch(`${url}?${searchArr.join("&")}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        alert("status: " + res.status);
      })
      .catch((err) => alert("error: " + err));
  } else {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }
        const { message = "Some Unknow Error" } = await res.json();
        return Promise.reject(message);
      })
      .catch((err) => {
        alert("error: " + err);
        return Promise.reject(err);
      });
  }
};
