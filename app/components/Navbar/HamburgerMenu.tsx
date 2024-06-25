"use client";

import React, { type ReactNode, useState } from "react";

import styles from "./Navbar.module.scss";

type HamburgerMenuProps = { children: ReactNode };

const HamburgerMenu = ({ children }: HamburgerMenuProps) => {
	const [openMenu, setOpenMenu] = useState(false);

	const handleHamburger = () => {
		setOpenMenu((state) => !state);
	};

	return (
		<>
			<ul className={`${styles.Navbar__container__menu} ${openMenu ? styles.open : ""}`}>{children}</ul>
			<button
				className={styles.Navbar__container_hamburger}
				onClick={handleHamburger}
			>
				<img
					src="/menu.svg"
					alt="hamburger"
				/>
			</button>
		</>
	);
};

export default HamburgerMenu;
