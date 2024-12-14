import Image from "next/image";
import React from "react";
import { Article } from "../types/types";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <div className="space-y-2">
        <div className="mx-auto text-center">
          <Image
            src={article.thumbnails.url}
            alt="thumbnail"
            width={article.thumbnails.width}
            height={article.thumbnails.height}
          />
        </div>
        <h3 className="text-left">{article.title}</h3>
        <div className="flex gap-3 items-center">
          <span>{article.createdAt}</span>
          <span>{article.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
