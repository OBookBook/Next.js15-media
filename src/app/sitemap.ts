import { MetadataRoute } from "next";
import { getAllArticles, getAllTags } from "./libs/api";
import { Article, Tag } from "./types/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages: MetadataRoute.Sitemap = [
    { url: process.env.NEXT_PUBLIC_SITE_URL! },
    { url: `process.env.NEXT_PUBLIC_SITE_URL/tags` },
  ];

  const { contents } = await getAllArticles();
  const articlePages: MetadataRoute.Sitemap = contents.map(
    (article: Article) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${article.id}`,
      lastModified: new Date(article.createdAt),
    })
  );

  const { allTags } = await getAllTags();
  const tagPages: MetadataRoute.Sitemap = allTags.map((tag: Tag) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/tags/${tag.name}`,
    lastModified: new Date(tag.createdAt),
  }));

  return [...defaultPages, ...articlePages, ...tagPages];
}
