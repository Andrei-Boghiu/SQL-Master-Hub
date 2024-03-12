import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "SQL Master Hub",
	description: "A gamified learning experience.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">
					<Navbar />

					{children}
					<Analytics />
					<SpeedInsights />
					<Footer />
				</div>
			</body>
		</html>
	);
}
