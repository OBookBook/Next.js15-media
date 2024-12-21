import { client } from "./client";

/**
 * Retrieves all articles.
 */
export const getAllArticles = async (offset: number = 0, limit: number = 6) => {
  const data = await client.get({
    endpoint: "articles",
    queries: { offset, limit },
    // customRequestInit: {
    //   next: { revalidate: 3600 },
    // },
  });

  return {
    contents: data.contents,
    totalCount: data.totalCount,
  };
};

/**
 * Retrieves the details of article.
 */
export const getDetailArticle = async (contentId: string) => {
  const data = await client.getListDetail({
    endpoint: "articles",
    contentId: contentId,
  });

  return {
    articles: data,
    contents: data.contents,
    totalCount: data.totalCount,
  };
};

/**
 * List of articles about tags
 */

export const getArticlesByTagId = async (tagId: string) => {
  const data = await client.get({
    endpoint: "articles",
    queries: { filters: `tags[equals]${tagId}` },
  });

  return {
    articles: data.contents,
    totalCount: data.totalCount,
  };
};

/**
 * Retrieves all Tagu List
 */

export const getAllTags = async () => {
  const data = await client.get({
    endpoint: "tags",
  });

  return {
    allTags: data.contents,
  };
};
