import { getDetailArticles } from "@/app/libs/api";
import React from "react";

const DetailArticle = async ({ params }: { params: { contentId: string } }) => {
  const contentId = params.contentId;
  const { data } = await getDetailArticles(contentId);
  console.log(data);
  return <div>Details</div>;
};

export default DetailArticle;
