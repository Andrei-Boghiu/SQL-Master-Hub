import styles from "./footer.module.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className={styles.container}>
			<div className={styles.logo}>Created By jandreiv</div>

			<div className={styles.text}>&copy; {year}</div>
		</div>
	);
};

export default Footer;