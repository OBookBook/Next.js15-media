import { getDetailArticle } from "@/app/libs/api";
import Image from "next/image";
import parse from "html-react-parser";
import React from "react";
import { XShareButton } from "@/components/common/XShareButton";
import ArticleCommercial from "@/components/common/ArticleCommercial";
import BackToTopPageButton from "@/components/common/BackToTopPageButton";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ contentId: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const contentId = (await params).contentId;
  const { articles } = await getDetailArticle(contentId);
  const { title, thumbnails } = articles;

  return {
    title: title,
    openGraph: {
      images: [
        {
          url: thumbnails?.url || "/default-thumbnail.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const DetailArticle = async ({ params }: PageProps) => {
  const contentId = (await params).contentId;
  const { articles } = await getDetailArticle(contentId);
  const { title, thumbnails, createdAt, content, author, tags } = articles;
  const tagList = Array.isArray(tags) ? tags : [tags];

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${contentId}`;

  return (
    <div className="container mx-auto md:max-w-[760px] my-4">
      <Image src={thumbnails.url} alt="title" width={760} height={420} />
      <div className="mx-auto text-center">
        <h2 className="font-semibold my-4 md:text-4xl">{title}</h2>
        <div className="my-2 text-gray-500">
          <span>{new Date(createdAt).toLocaleDateString()}</span>
          <span>著者{author}</span>
        </div>
        <div className="my-4 inline-block">
          {tagList.map((tag: { name: string }) => (
            <Link
              href={`/tags/${tag.name}`}
              key={tag.name}
              className="border-2 px-2 py-1 rounded-md border-slate-500"
            >
              <span className="text-sm">{tag.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="prose prose-lg max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-500">
        {parse(content)}
      </div>

      <div className="my-12 text-center">
        <XShareButton
          url={shareUrl}
          title={title}
          hashtags={tagList.map((tag: { name: string }) => tag.name)}
        />
      </div>

      <div className="my-16">
        <ArticleCommercial />
      </div>

      <div className="text-center mb-12">
        <BackToTopPageButton />
      </div>
    </div>
  );
};

export default DetailArticle;
