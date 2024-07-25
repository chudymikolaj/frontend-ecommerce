"use client";

import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { PrimaryButton, BorderButton } from "@/app/components/Buttons";
import { getProductsFromOrderCollectionToCart } from "@store/cartSlice";

import styles from "./dropdownCart.module.scss";
import { useEffect } from "react";

type DropdownCart = {
	className: string;
};

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const DropdownCart = ({ className }: DropdownCart) => {
	const pathname = usePathname();
	const dispatch = useAppDispatch();
	const { items: itemsCart, productCount, loading, basketSync } = useAppSelector((state) => state.cart);
	const isCart = productCount > 0;

	useEffect(() => {
		if (loading === "idle") {
			dispatch(getProductsFromOrderCollectionToCart(basketSync));
		}
	}, [loading, dispatch]);

	return (
		<div className={`${styles.DropdownCart__container} ${className}`}>
			<div className={styles.DropdownCart__container_cart}>
				{!isCart && (
					<div className={styles.DropdownCart__container_products_empty}>
						<p className={styles.DropdownCart__container_products_empty_text}>Twój koszyk jest pusty</p>
						{pathname !== "/" && (
							<BorderButton
								linkTo="/"
								name="Przejdź do strony głównej"
							/>
						)}
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
											src={`${CMS_URL}${items.Image.data?.attributes.url}`}
											alt={`${CMS_URL}${items.Image.data?.attributes.alternativeText}`}
											className={styles.DropdownCart__container_products__item_image}
										/>
										<div className={styles.DropdownCart__container_products__item_text}>
											<span>{items.Name}</span>
											<span>{items.Quantity} szt.</span>
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
