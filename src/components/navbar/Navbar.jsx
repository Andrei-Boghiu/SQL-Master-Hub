import Links from "@/components/navbar/links/Links";
import styles from "@/components/navbar/navbar.module.css";
import Logo from "./logo/Logo";
import Link from "next/link";

const Navbar = async () => {
	return (
		<div className={styles.container}>
			<Link href="/" className={styles.logo}>
				<Logo />
			</Link>

			<div>
				<Links />
			</div>
		</div>
	);
};

export default Navbar;
