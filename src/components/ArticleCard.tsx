"use client";

import Image from "next/image";
import React from "react";
import { Article } from "../app/types/types";
import { TransitionLink } from "./common/TransitionLink";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <div className="space-y-2">
        <div>
          <TransitionLink href={`/articles/${article.id}`}>
            <Image
              src={article.thumbnails.url}
              alt="thumbnail"
              width={article.thumbnails.width}
              height={article.thumbnails.height}
              className="rounded-md hover:ring-blue-600 hover:ring-2 transition-all duration-150"
            />
          </TransitionLink>
        </div>
        <TransitionLink
          href={`/articles/${article.id}`}
          className="text-left md:text-xl leading-7 inline-block hover:text-blue-600 transition-all duration-150"
        >
          {article.title}
        </TransitionLink>
        <div className="flex gap-3 items-center text-gray-600">
          <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          <span>著者名:{article.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
