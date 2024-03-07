"use client";
import Link from "next/link";
import styles from "./not-found.module.css";

const Error = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>Even Jedi Developers Encounter Dark Corners!</h2>
			<h1 className={styles.title}>ERROR 👾</h1>
			<p className={styles.desc}>Uh-oh! The Force is not strong with this one.</p>
			<p className={styles.text}>
				An unexpected disturbance in the hyperspace has caused an error in our systems.
				We're working on fixing it faster than you can say 'Chewbacca.' 🛠️🌌 In the
				meantime, grab a cup of blue milk and relax. We'll have everything back in order
				soon. Thanks for your patience, brave Rebel! #Error404RebelAlliance
			</p>
			<p className={styles.text}>
				Feel free to use the force and click the link below to return to the safety of the
				home base. Remember, the Millennium Falcon had its share of glitches too! 🌌🛠️
			</p>
			<Link className={styles.link} href="/">
				#BackToHomePage
			</Link>
		</div>
	);
};

export default Error;
