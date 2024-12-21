import styles from "./../../styles/Home.module.css";

const Hero = ({ title }: { title: string }) => {
  return (
    <div>
      <div
        className={`${styles.animatedBackground} h-44 -mb-28 relative w-full`}
      ></div>
      <div className="relative">
        <h2 className="text-center md:text-5xl z-20 relative text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
