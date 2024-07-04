import { LinkTypes } from "../Navbar.types";
import styles from "./link.module.scss";

type LinkProps = {
	link: LinkTypes;
};

const Link = ({ link }: LinkProps) => {
	return (
		<li
			key={link.id}
			className={styles.Link__container__menuLink}
		>
			<a href={link.Url}>{link.Name}</a>
		</li>
	);
};

export default Link;
