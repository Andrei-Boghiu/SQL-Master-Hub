import styles from "./learn.module.css";
import Image from "next/image";
import Link from "next/link";

const LearnPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h2 className={styles.subtitle}> Start Your Learning Journey!</h2>
				<h1 className={styles.title}>Learning Path</h1>
				<p className={styles.desc}>
					Our curriculum unfolds like a compelling story within a book, where each chapter
					unveils new knowledge and skills. Dive into the narrative of learning, turning
					the pages of discovery, and unlock the chapters that shape your educational
					adventure. Join us in crafting your unique story of growth and achievement!
				</p>
				<p>#FirstQueryQuest</p>
				<Link className={styles.linkBtn} href="/learn/chapter/1">
					Start With Chapter 1
				</Link>
			</div>
			<div className={styles.imgContainer}>
				<Image
					className={styles.img}
					src="/learn.png"
					alt="about picture"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</div>
	);
};

export default LearnPage;
