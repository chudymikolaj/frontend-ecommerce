import { UserLinksTypes } from "../Navbar.types";
import styles from "./linkWithIcon.module.scss";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type LinkWithIconProps = {
	link: UserLinksTypes;
};

const LinkWithIcon = ({ link }: LinkWithIconProps) => {
	const getLink = link.UserLink;

	return (
		<a
			key={getLink.id}
			href={getLink.Url}
			className={styles.LinkWithIcon__container__menuLink}
		>
			<img
				src={`${CMS_URL}${getLink.Icon.data.attributes.url}`}
				alt=""
			/>

			<span className={styles.LinkWithIcon__container__menuLink_name}>{getLink.Name}</span>
		</a>
	);
};

export default LinkWithIcon;
