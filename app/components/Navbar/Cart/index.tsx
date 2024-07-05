import { UserLinksTypes } from "../Navbar.types";
import styles from "./cart.module.scss";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type CartProps = {
	link: UserLinksTypes;
};

const Cart = ({ link }: CartProps) => {
	return (
		<a
			key={link.UserLink.id}
			href={link.UserLink.Url}
			className={styles.Cart__container}
		>
			<div className={styles.Cart__container__cart}>
				<img
					src={`${CMS_URL}${link.UserLink.Icon.data.attributes.url}`}
					alt=""
				/>
				<div className={styles.Cart__container__cart_icon}>0</div>
			</div>

			<span className={styles.Cart__container_name}>{link.UserLink.Name}</span>
		</a>
	);
};

export default Cart;
