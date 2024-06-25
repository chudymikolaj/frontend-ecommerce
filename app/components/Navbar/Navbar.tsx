import { navbarRequest } from "@services/baseService";
import HandleMenu from "./HamburgerMenu";

import styles from "./Navbar.module.scss";
import type { LinkTypes, LinkWithIconTypes } from "./Navbar.types";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const Navbar = async () => {
	const navbar = await navbarRequest();

	if (!navbar) return null;

	const getAttributes = navbar?.data.attributes;
	const getLogotype = getAttributes?.LogotypeName;
	const getMenu = getAttributes?.Menu || [];
	const getMenuButtons = getAttributes?.MenuButtons || [];

	return (
		<div className={styles.Navbar__container}>
			<div className={styles.Navbar__container_wrapperLogotype}>
				<a
					href="/"
					className={styles.Navbar__container_logotype}
				>
					{getLogotype}
				</a>
			</div>

			<HandleMenu>
				{getMenu.map((link: LinkTypes) => (
					<li
						key={link.id}
						className={styles.Navbar__container__menu__link}
					>
						<a href={link.Url}>{link.Name}</a>
					</li>
				))}
			</HandleMenu>

			<div className={styles.Navbar__container__menuButtons}>
				<div className={styles.Navbar__container__menuButtons_wrapper}>
					{getMenuButtons.map((link: LinkWithIconTypes) => {
						const isCart = link.Link === "/cart";
						return (
							<a
								key={link.id}
								href={link.Link}
								className={styles.Navbar__container__menuButton}
							>
								{isCart ? (
									<div className={styles.Navbar__container__menuButton__cart}>
										<img
											src={`${CMS_URL}${link.Icon.data.attributes.url}`}
											alt=""
										/>
										<div className={styles.Navbar__container__menuButton__cart_icon}>0</div>
									</div>
								) : (
									<img
										src={`${CMS_URL}${link.Icon.data.attributes.url}`}
										alt=""
									/>
								)}
								<span className={styles.Navbar__container__menuButton_name}>{link.Name}</span>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
