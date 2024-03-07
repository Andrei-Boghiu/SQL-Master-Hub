"use client";
import Link from "next/link";
import styles from "./not-found.module.css";

const NotFound = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>This is not the page you&apos;re looking for...</h2>
			<h1 className={styles.title}>NOT FOUND 👾</h1>
			<p className={styles.desc}>
				Uh-oh! It appears you&apos;ve ventured into the Unknown Regions of the internet.
			</p>
			<p className={styles.text}>
				🌌✨ Fear not, young Padawan! We&apos;ll navigate the hyperspace lanes and get you
				back to the Jedi-approved pages. Remember, always check your coordinates and may
				the force be with your URL-finding quest! 🚀🛰️ #404JediMaster
			</p>
			<p className={styles.text}>
				🚀💫 Fasten your seatbelt, and prepare for the hyperdrive! We&apos;re headed back
				to the comfort of our home planet. May the redirects be swift and the force be
				with you!
			</p>
			<Link className={styles.link} href="/">
				#BackToHomePage
			</Link>
		</div>
	);
};

export default NotFound;
