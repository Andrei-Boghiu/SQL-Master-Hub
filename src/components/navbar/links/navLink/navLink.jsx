"use client";

import Link from "next/link";
import styles from "@/components/navbar/links/navLink/navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
	const pathName = usePathname();

	const exactMatch = pathName === item.path;
	const learnRoute = pathName.startsWith("/learn") && item.path.includes("/learn");
	// const nestedPath = exactMatch ? exactMatch : pathName.includes(item.path);

	const classList = `${styles.container} ${exactMatch && styles.active}  ${learnRoute && styles.active}`;

	return (
		<Link
			className={classList}
			href={item.path}
		>
			{item.title}
		</Link>
	);
};

export default NavLink;
