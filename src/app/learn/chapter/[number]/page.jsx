"use client";

import styles from "./chapter.module.css";
import { getChapter, getChaptersLength } from "@/database/learn/learn_db";
import { useRouter } from "next/navigation";
import Carousel from "@/components/chapter/carousel";

const ChapterPage = ({ params }) => {
	const router = useRouter();

	const { number } = params;
	const chapterNr = Number(number);

	const chapterData = getChapter(chapterNr);
	const chaptersLength = getChaptersLength();

	const canGoNext = chaptersLength > chapterData.chapterNr;
	const canGoPrevious = chapterData.chapterNr - 1;

	const handleNext = () => {
		const nextChapter = chapterData.chapterNr + 1;
		router.push(`/learn/chapter/${nextChapter}`);
	};

	const handlePrevious = () => {
		const previousChapter = chapterData.chapterNr - 1;
		router.push(`/learn/chapter/${previousChapter}`);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>{chapterData.subtitle}</h2>

			<h1 className={styles.title}>{chapterData.title}</h1>

			<div className={styles.pages}>
				<Carousel pages={chapterData.pages}></Carousel>
			</div>

			<div className={styles.buttons}>
				{canGoPrevious ? (
					<button onClick={handlePrevious} className={styles.button}>
						Previous Chapter
					</button>
				) : null}

				{canGoNext && (
					<button onClick={handleNext} className={`${styles.button} ${styles.primary}`}>
						Next Chapter
					</button>
				)}
			</div>
		</div>
	);
};

export default ChapterPage;
