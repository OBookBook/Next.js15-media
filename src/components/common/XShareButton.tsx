import Link from "next/link";
import React from "react";

interface XShareButtonProps {
  url: string;
  title: string;
  hashtags: string[];
}

export const XShareButton = ({
  url,
  title,
  hashtags = [],
}: XShareButtonProps) => {
  let shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}${
    hashtags.length ? `&hashtags=${hashtags.join(",")}` : ""
  }`;

  return (
    <div className="space-y-3">
      <div>
        <span className="font-semibold md:text-xl">⧹ SNSでシェアしよう ⧸</span>
      </div>

      <Link
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 2"
          fill="currentColor"
          className="mr-2"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.171-5.214-6.817L4.99 21.75H1.6817.73-8.8351L1.254 2.25H8.0814.713 6.3" />
        </svg>
        <span className="pb-[0.1rem]">記事を共有する</span>
      </Link>
    </div>
  );
};
