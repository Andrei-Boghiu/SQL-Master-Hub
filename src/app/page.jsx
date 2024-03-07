import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>SQL Master Hub</h1>
				<p className={styles.desc}>
					Embark on a Jedi's journey to SQL mastery! Our interactive galaxy awaits, where
					you can hone your SQL skills through lightsaber-sharp challenges, tackle
					real-world data battles, and craft your own SQL saga. Become a SQL Jedi Knight
					and let the Force guide you to a galaxy of data excellence! 🚀💻✨
				</p>
				<p>#SQLGalacticMastery</p>
				<div className={styles.buttons}>
					<button className={styles.button}>Learn</button>
					<button className={styles.button}>Practice</button>
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
