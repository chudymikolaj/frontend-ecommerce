"use client";

import { useAppSelector } from "@store/hooks";
import PrimaryButton from "@components/PrimaryButton";

import styles from "./dropdownCart.module.scss";

type DropdownCart = {
	className: string;
};

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const DropdownCart = ({ className }: DropdownCart) => {
	const { items: itemsCart, productCount } = useAppSelector((state) => state.cart);
	const isCart = productCount > 0;

	return (
		<div className={`${styles.DropdownCart__container} ${className}`}>
			<div className={styles.DropdownCart__container_cart}>
				{!isCart && (
					<div className={styles.DropdownCart__container_products_empty}>
						<p className={styles.DropdownCart__container_products_empty_text}>Twój koszyk jest pusty</p>
						<PrimaryButton
							linkTo="/"
							name="Przejdź do strony głównej"
						/>
					</div>
				)}

				{isCart && (
					<>
						<div className={styles.DropdownCart__container_title}>
							Koszyk (<span>{productCount}</span>)
						</div>
						<div className={styles.DropdownCart__container_products}>
							{itemsCart.map((items, index) => {
								return (
									<div
										key={index}
										className={styles.DropdownCart__container_products__item}
									>
										<img
											src={`${CMS_URL}${items.image.data.attributes.url}`}
											alt={`${CMS_URL}${items.image.data.attributes.alternativeText}`}
											className={styles.DropdownCart__container_products__item_image}
										/>
										<div className={styles.DropdownCart__container_products__item_text}>
											<span>{items.name}</span>
											<span>{items.quantity} szt.</span>
										</div>
									</div>
								);
							})}
						</div>
						<div className={styles.DropdownCart__container_button}>
							<PrimaryButton
								linkTo="/cart"
								name="Przejdź do koszyka"
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default DropdownCart;
