"use client";

import React, { useState } from "react";
import { getAllArticles } from "../app/libs/api";
import { Article } from "../app/types/types";
import ArticleCard from "./ArticleCard";
import { MAX_DISPLAY_ARTICLE } from "../app/utils/constants";

type LoadMoreButtonProps = {
  initialCount: number;
  totalCount: number;
};

const LoadMoreButton = ({ initialCount, totalCount }: LoadMoreButtonProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [cureentCount, setCurrentCount] = useState(initialCount);
  const [remainArticleCount, setRemainArticleCount] = useState(
    totalCount - initialCount
  );

  const loadMore = async () => {
    setLoading(true);
    const { contents } = await getAllArticles(
      cureentCount,
      MAX_DISPLAY_ARTICLE
    );
    setArticles((prev) => [...prev, ...contents]);
    setCurrentCount((prev) => prev + contents.length);
    setRemainArticleCount((prev) => prev - cureentCount);
    setLoading(false);
  };

  const hasMore = cureentCount < totalCount;

  return (
    <div className="mt-4 text-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={loadMore}
          className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 transition-all duration-150"
        >
          {loading
            ? "読み込み中。。。"
            : `もっと見る(あと${remainArticleCount}記事)`}
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
