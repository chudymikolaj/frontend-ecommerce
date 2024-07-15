"use client";

import { useAppSelector } from "@store/hooks";

import DropdownCart from "./DropdownCart";

import { UserLinksTypes } from "../Navbar.types";
import styles from "./cart.module.scss";

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type CartProps = {
	link: UserLinksTypes;
};

const Cart = ({ link }: CartProps) => {
	const totalProducts = useAppSelector((state) => state.cart.productCount);

	return (
		<div className={styles.Cart__container}>
			<a
				key={link.UserLink.id}
				href={link.UserLink.Url}
				className={styles.Cart__container_link}
			>
				<div className={styles.Cart__container__cart}>
					<img
						src={`${CMS_URL}${link.UserLink.Icon.data.attributes.url}`}
						alt=""
					/>
					<div className={styles.Cart__container__cart_icon}>{totalProducts}</div>
				</div>

				<span className={styles.Cart__container_name}>{link.UserLink.Name}</span>
			</a>

			<DropdownCart className={styles.Cart__container_CartDropdown} />
		</div>
	);
};

export default Cart;
