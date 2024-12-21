import React from "react";
import ArticleCard from "../ArticleCard";
import { getDetailArticle } from "@/app/libs/api";
import { COMMERCIAL_ARTICLE_ID } from "@/app/utils/constants";

const ArticleCommercial = async () => {
  const { articles } = await getDetailArticle(COMMERCIAL_ARTICLE_ID);

  return (
    <div>
      <div className="text-left border-b py-2">
        <h3 className="md:text-2xl">プログラミングの極意</h3>
      </div>

      <div>
        <ArticleCard article={articles} />
      </div>
    </div>
  );
};

export default ArticleCommercial;
