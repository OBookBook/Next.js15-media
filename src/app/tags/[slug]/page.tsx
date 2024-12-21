import { getAllTags, getArticlesByTagId } from "@/app/libs/api";
import ArticleCardList from "@/components/ArticleList";
import Hero from "@/components/layout/Hero";
import LoadMoreButton from "@/components/LoadMoreButton";
import React from "react";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

const DetailTag = async ({ params }: Params) => {
  const { slug: tagName } = await params; // params を await で解決
  const { allTags } = await getAllTags();

  const currentTag = allTags.find(
    (tag: { id: string; name: string }) => tag.name === tagName
  );

  if (!currentTag) {
    return <div>タグが見つかりませんでした。</div>;
  }

  const { articles, totalCount } = await getArticlesByTagId(currentTag.id);

  return (
    <div className="px-2 py-12">
      <Hero title={tagName} />

      <div className="mt-24">
        <div className="mx-auto text-center py-4">
          <h2 className="md:text-4xl">記事一覧</h2>
          <ArticleCardList articles={articles} />
          <LoadMoreButton
            initialCount={articles.length}
            totalCount={totalCount}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailTag;
