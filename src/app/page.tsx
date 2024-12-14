import styles from "./styles/Home.module.css";

export default async function Home() {
  return (
    <>
      <div className={`${styles.animatedBackground} h-44 -mb-40  w-full`}></div>
      <main className="container mx-auto px-2 py-12">
        <div className="relative">
          <h2 className="text-center md:text-5xl z-20 relative text-white">
            Iwa-Media
          </h2>
        </div>
      </main>
    </>
  );
}
