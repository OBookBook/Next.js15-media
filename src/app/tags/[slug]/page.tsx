import Hero from "@/components/layout/Hero";
import React from "react";

const DetailTag = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  return (
    <div className="px-2 py-12">
      <Hero title={slug} />
    </div>
  );
};

export default DetailTag;
