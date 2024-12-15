import Link from "next/link";
import React from "react";

const BackToTopPageButton = () => {
  return (
    <Link
      href={"/"}
      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Topページへ戻る
    </Link>
  );
};

export default BackToTopPageButton;
