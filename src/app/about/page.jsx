import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Forge Your Destiny!</h2>
        <h1 className={styles.title}>
          Where learning meets adventure in a galaxy of code! 🚀💻✨
        </h1>
        <p className={styles.desc}>
          This platform was developed as a safe haven for SQL enthusiasts,
          providing an environment for learning and practicing with
          training-tailored data
        </p>
       
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3>Developed by</h3>
            <p>John Doe</p>
          </div>
          <div className={styles.box}>
            <h3>Learning Chapters by</h3>
            <p>John Doe</p>
          </div>
          <div className={styles.box}>
            <h3>Trainers</h3>
            <p>John Doe</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/about.png"
          alt="About age picture"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default AboutPage;
