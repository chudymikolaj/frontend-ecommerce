import { GET } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

import Dropdown from "../Dropdown";

import { UserLinksTypes } from "../Navbar.types";
import styles from "./authLoginButton.module.scss";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type AuthLoginButtonProps = {
	link: UserLinksTypes;
	children: any;
};

const AuthLoginButton = async ({ link, children }: AuthLoginButtonProps) => {
	const session = await getServerSession(GET);
	const getLink = link?.UserLink;
	const getLinks = link?.UserLinks;

	console.log(getLinks);

	if (session) {
		return (
			<div className={styles.AuthLoginButton__container}>
				<a
					key={getLink.id}
					href="/dashboard"
					className={styles.AuthLoginButton__container__menuLink}
				>
					<img
						src={`${CMS_URL}${getLink.Icon.data.attributes.url}`}
						alt=""
					/>

					<span className={styles.AuthLoginButton__container__menuLink_name}>Mój Profil</span>
				</a>

				<Dropdown
					className={styles.AuthLoginButton__container_dropdown}
					links={getLinks}
				/>
			</div>
		);
	}

	return children;
};

export default AuthLoginButton;
