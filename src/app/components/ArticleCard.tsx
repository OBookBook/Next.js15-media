import Image from "next/image";
import React from "react";

const ArticleCard = () => {
  return (
    <div>
      <div className="space-y-2">
        <div className="mx-auto text-center">
          <Image src={"./next.svg"} alt="thumbnail" width={100} height={100} />
        </div>
        <h3 className="text-left">Sample Titile</h3>
        <div className="flex gap-3 items-center">
          <span>12/14</span>
          <span>iwa</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
