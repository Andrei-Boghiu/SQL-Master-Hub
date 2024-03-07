import styles from "./logo.module.css";
import Image from "next/image";

const Logo = () => {
	return (
		<div className={styles.container}>
			<Image className={styles.logo} alt="Logo" src="/logo.png" width={50} height={50} />
		</div>
	);
};

export default Logo;
