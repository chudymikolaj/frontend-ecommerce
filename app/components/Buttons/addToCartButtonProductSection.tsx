"use client";

import { postProductToOrderCollection } from "@store/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { type MouseEvent } from "react";
import type { AddToCartButtonPropsType } from "./buttons.types";

import styles from "./buttons.module.scss";
import CartIcon from "public/add-to-cart-icon.svg";
import ProgressActivityIcon from "public/progress_activity.svg";

const AddToCartButtonProductsSectionItem = ({ productData, extendedClass }: AddToCartButtonPropsType) => {
	const dispatch = useAppDispatch();
	const getLoading = useAppSelector((state) => state.cart.loading);
	const isLoading = getLoading === "pending" ? true : false;

	const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const { idProduct, name, slug, price, image } = productData;

		const dataToAddToCart = {
			IdProduct: idProduct,
			Name: name,
			Slug: slug,
			Price: price,
			Quantity: 1,
			Image: image,
		};

		dispatch(postProductToOrderCollection(dataToAddToCart));
	};

	return (
		<button
			className={`${styles.AddToCartButtonProductsSectionItem__container__button} ${extendedClass}`}
			onClick={handleAddToCart}
			disabled={isLoading}
		>
			{isLoading ? (
				<div className={styles.spinner__container}>
					<ProgressActivityIcon className={styles.spinner__container__svg} />
				</div>
			) : (
				<CartIcon className={styles.AddToCartButtonProductsSectionItem__container__button_icon} />
			)}
		</button>
	);
};

export default AddToCartButtonProductsSectionItem;
