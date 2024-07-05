import { GET } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

import styles from "./authLoginButton.module.scss";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const AuthLoginButton = async ({ link, children }: { link: any; children: any }) => {
	const session = await getServerSession(GET);
	const getLink = link.UserLink;

	if (session) {
		return (
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
		);
	}

	return children;
};

export default AuthLoginButton;
