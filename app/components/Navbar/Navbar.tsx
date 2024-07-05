import { navbarRequest } from "@services/baseService";

import AuthLoginButton from "@components/Navbar/AuthLoginButton";
import Cart from "@components/Navbar/Cart";
import HandleMenu from "@components/Navbar/HamburgerMenu";
import Link from "@components/Navbar/Link";
import LinkWithIcon from "@components/Navbar/LinkWithIcon";

import styles from "./Navbar.module.scss";
import type { LinkTypes, UserLinksTypes } from "./Navbar.types";

const Navbar = async () => {
	const navbar = await navbarRequest();

	if (!navbar) return null;

	const getAttributes = navbar?.data.attributes;
	const getLogotype = getAttributes?.LogotypeName;
	const getMenu = getAttributes?.Menu || [];
	const getMenuButtons = getAttributes?.UserLinks || [];

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

			<div className={styles.Navbar__container__wrapper}>
				<HandleMenu>
					{getMenu.map((link: LinkTypes) => (
						<Link link={link} />
					))}
				</HandleMenu>

				<div className={styles.Navbar__container__menuButtons}>
					<div className={styles.Navbar__container__menuButtons_wrapper}>
						{getMenuButtons.map((link: UserLinksTypes) => {
							const isCart = link.UserLink.Url === "/cart";
							const isLogin = link.UserLink.Url === "/login";

							if (isCart) {
								return <Cart link={link} />;
							}

							if (isLogin) {
								return (
									<AuthLoginButton link={link}>
										<LinkWithIcon link={link} />
									</AuthLoginButton>
								);
							}

							return <LinkWithIcon link={link} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
