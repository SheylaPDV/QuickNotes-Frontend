import client from "./api/client";

const tasksBaseUrl = "v1/tasks";

export const getTasks = async () => {
  const url = tasksBaseUrl;
  return client.get(url);
};
