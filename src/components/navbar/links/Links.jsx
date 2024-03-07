"use client";

import styles from "@/components/navbar/links/links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";

const routes = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Learn",
		path: "/learn",
	},
	{
		title: "Practice Hub",
		path: "/practice",
	},
];

const Links = ({ session }) => {
	const [open, setOpen] = useState(false);
	// TEMP tile auth is ready
	const isAdmin = true;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{routes.map((route) => (
					<NavLink item={route} key={route.title} />
				))}
			</div>

			<Image
				src="/menu.png"
				alt="Menu Button"
				width={30}
				height={30}
				onClick={() => setOpen((previousValue) => !previousValue)}
				className={styles.mobileMenuBtn}
			/>
			{open && (
				<div className={styles.mobileLinks}>
					{routes.map((route) => (
						<NavLink item={route} key={route.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
