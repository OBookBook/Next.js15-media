import { client } from "./client";

export const getAllArticles = async () => {
  const data = await client.get({
    endpoint: "articles",
  });

  return data;
};
