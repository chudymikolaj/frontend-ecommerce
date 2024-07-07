"use client";

import { useSession, signOut } from "next-auth/react";

import { LinkWithIconTypes } from "../Navbar.types";
import styles from "./dropdown.module.scss";

type DropdownProps = {
	links: LinkWithIconTypes[];
	className: string;
};

const Dropdown = ({ links, className }: DropdownProps) => {
	const { data: status } = useSession();

	return (
		<div className={className}>
			<ul className={styles.Dropdown__component}>
				{links?.map((link) => {
					if (link.Url === "/logout" && status) {
						return (
							<li
								key={link.id}
								className={styles.Dropdown__component__item}
							>
								<button
									onClick={() => signOut()}
									className={styles.Dropdown__component__item_link}
								>
									{link.Name}
								</button>
							</li>
						);
					}

					if (link.Url !== "/login" && link.Url !== "/register" && status) {
						return (
							<li
								key={link.id}
								className={styles.Dropdown__component__item}
							>
								<a
									href={link.Url}
									className={styles.Dropdown__component__item_link}
								>
									{link.Name}
								</a>
							</li>
						);
					}

					if (link.Url !== "/logout" && !status) {
						return (
							<li
								key={link.id}
								className={styles.Dropdown__component__item}
							>
								<a
									href={link.Url}
									className={styles.Dropdown__component__item_link}
								>
									{link.Name}
								</a>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
