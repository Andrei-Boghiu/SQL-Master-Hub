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
					Our mission is to make learning an epic adventure. Immerse yourself in a
					gamified learning experience where challenges are your quests, real-world
					scenarios are your battles, and projects are your conquests. Join us on this
					journey, and may the SQL Force be with you! 🌌🎮✨
				</p>
				<p>#SQLJediMastery</p>
				<div className={styles.boxes}>
					<div className={styles.box}>
						<h3>10k+</h3>
						<p>Jedi Apprentices</p>
					</div>
					<div className={styles.box}>
						<h3>500+</h3>
						<p>Jedi Quests</p>
					</div>
					<div className={styles.box}>
						<h3>100k+</h3>
						<p>Jedi Archives</p>
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
