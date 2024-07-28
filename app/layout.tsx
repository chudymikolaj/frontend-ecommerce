import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

import "@styles/globals.scss";
import "@styles/variables.scss";
import styles from "@styles/grid.module.scss";

import Navbar from "@components/Navbar/Navbar";
import ProtectedRoute from "@components/ProtectedRoute";
import StoreProvider from "@components/StoreProvider";

const TitilliumWeb = Titillium_Web({ subsets: ["latin"], weight: ["200", "400", "600", "700", "900"] });

export const metadata: Metadata = {
	title: "BaristaGadgets",
	description: "Generated by BaristaGadgets",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={TitilliumWeb.className}>
				<StoreProvider>
					<ProtectedRoute>
						<div className={styles.layout__container}>
							<Navbar />
							{children}
						</div>
					</ProtectedRoute>
				</StoreProvider>
			</body>
		</html>
	);
}
