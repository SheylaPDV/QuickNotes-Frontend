import client from "./api/client";

const tasksBaseUrl = "v1/tasks";

export const getTasks = async () => {
  const url = tasksBaseUrl;
  console.log(url);
  return client.get(url);
};

export const postTasks = async (newTask) => {
  const url = tasksBaseUrl;
  console.log(url);
  return client.post(url, newTask);
};
