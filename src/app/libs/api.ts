import { Article } from "../types/types";
import { client } from "./client";

export const getAllArticles = async (offset: number = 0, limit: number = 6) => {
  const data = await client.get({
    endpoint: "articles",
    queries: { offset, limit },
  });

  return { data };
};
