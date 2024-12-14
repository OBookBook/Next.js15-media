import ArticleCardList from "./components/ArticleList";
import { getAllArticles } from "./libs/api";
import styles from "./styles/Home.module.css";

export default async function Home() {
  const { data } = await getAllArticles();
  const articles = data.contents;

  return (
    <>
      <div
        className={`${styles.animatedBackground} h-44 -mb-40 relative w-full`}
      ></div>
      <main className="container mx-auto px-2 py-12">
        <div className="relative">
          <h2 className="text-center md:text-5xl z-20 relative text-white">
            Iwa-Media
          </h2>
        </div>

        <div className="mt-24">
          <div className="mx-auto text-center py-4">
            <h2 className="md:text-4xl">記事一覧</h2>
            <ArticleCardList articles={articles} />
          </div>
        </div>
      </main>
    </>
  );
}
