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
export const getDetailArticle = async (contentId: string) => {
  const data = await client.getListDetail({
    endpoint: "articles",
    contentId: contentId,
  });

  return { data };
};

/**
 * List of articles about tags
 */

export const getArticlesByTagId = async (tagId: string) => {
  const data = await client.getList({
    endpoint: "articles",
    queries: { filters: `tags[equals]${tagId}` },
  });
  return { data };
};

/**
 * Retrieves all Tagu List
 */

export const getAllTags = async () => {
  const data = await client.get({
    endpoint: "tags",
  });

  return { data };
};
