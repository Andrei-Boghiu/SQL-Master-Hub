import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          SQL <br />
          Master Hub
        </h1>
        <p className={styles.desc}>
          Ready to embark on your SQL journey? <br />
          Dive into the world of databases with our beginner friendly training
          and practice platform. Learn SQL form scratch, step by step, with
          hands-on exercises.🚀💻✨
        </p>
        <p>#TheLearningHub</p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Link href="/learn">Learn</Link>
          </button>

          <button className={styles.button}>
            <Link href="/practice">Practice</Link>
          </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.heroImg}
          src="/hero.png"
          alt="Hero Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Home;
