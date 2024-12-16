import Hero from "@/components/layout/Hero";
import ArticleCardList from "../components/ArticleList";
import LoadMoreButton from "../components/LoadMoreButton";
import { getAllArticles } from "./libs/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data } = await getAllArticles(0, 3);
  const articles = data.contents;
  const totalCount = data.totalCount;
  return (
    <>
      <main className="mx-auto px-2 py-12">
        <Hero title="メディア" />

        <div className="mt-24">
          <div className="mx-auto text-center py-4">
            <h2 className="md:text-4xl">記事一覧</h2>
            <ArticleCardList articles={articles} />
            <LoadMoreButton
              initialCount={articles.length}
              totalCount={totalCount}
            />
          </div>
        </div>
      </main>
    </>
  );
}
