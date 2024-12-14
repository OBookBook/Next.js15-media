import { Article } from "../types/types";
import { client } from "./client";

/**
 * Retrieves all articles.
 */
export const getAllArticles = async (offset: number = 0, limit: number = 6) => {
  const data = await client.get({
    endpoint: "articles",
    queries: { offset, limit },
  });

  return { data };
};

/**
 * Retrieves the details of article.
 */
export const getDetailArticles = async (contentId: string) => {
  const data = await client.getListDetail({
    endpoint: "articles",
    contentId: contentId,
  });

  return { data };
};
