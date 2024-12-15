import React from "react";
import { Article } from "../types/types";
import ArticleCard from "@/components/ArticleCard";

type ArticleCardListProps = {
  articles: Article[];
};

const ArticleCardList = ({ articles }: ArticleCardListProps) => {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleCardList;
