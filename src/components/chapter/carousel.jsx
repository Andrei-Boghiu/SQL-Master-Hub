import { useState } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ pages }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? pages.length - 1 : prevIndex - 1));
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex === pages.length - 1 ? 0 : prevIndex + 1));
	};
	return (
		<div className={styles.container}>
			<div
				className={styles.wrapper}
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{pages.map((page, index) => (
					<div key={page.id} className={styles.page}>
						<div className={styles.content}>
							<div className={styles.textContainer}>
								<h2 className={styles.title}>{page.title}</h2>
								<div className={styles.desc}>
									{page.descriptions.map((desc, index) => (
										<p key={index}>{desc}</p>
									))}
								</div>

								{page.practice && (
									<Link target="_blank" href="/practice">
										Practice This Code
									</Link>
								)}

								<p className={styles.info}>
									Page {index + 1} of {pages.length}
								</p>
							</div>

							<div className={styles.imgContainer}>
								<Image
									className={styles.img}
									src="/about.png"
									alt="Explanatory Image"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									fill
								/>
							</div>
						</div>
					</div>
				))}
			</div>
			<button onClick={handlePrevClick} className={`${styles.button} ${styles.prev}`}>
				&lt;
			</button>
			<button onClick={handleNextClick} className={`${styles.button} ${styles.next}`}>
				&gt;
			</button>
		</div>
	);
};

export default Carousel;
