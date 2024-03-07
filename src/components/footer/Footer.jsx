import styles from "./footer.module.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className={styles.container}>
			<div className={styles.logo}>Created By Andrei Boghiu</div>

			<div className={styles.text}>Copyright &copy; {year}. All rights reserved.</div>
		</div>
	);
};

export default Footer;
