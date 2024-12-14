import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleCardList = () => {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default ArticleCardList;
