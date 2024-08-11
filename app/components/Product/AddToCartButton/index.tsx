"use client";

import { postProductToOrderCollection } from "@store/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useState } from "react";

import Quantity from "@components/Product/Quantity";

import styles from "./addToCartButton.module.scss";
import AddToCartButtonProps from "./addToCartButton.types";
import ProgressActivityIcon from "public/progress_activity.svg";

const AddToCartButton = ({ attributes }: AddToCartButtonProps) => {
	const { idProduct, name, slug, price, count, image } = attributes;
	const [quantity, setQuantity] = useState(1);
	const dispatch = useAppDispatch();
	const getLoading = useAppSelector((state) => state.cart.loading);
	const isLoading = getLoading === "pending" ? true : false;

	const handleAddToCart = () => {
		const dataToAddToCart = {
			IdProduct: idProduct,
			Name: name,
			Slug: slug,
			Price: price,
			Quantity: quantity,
			Image: image,
		};

		dispatch(postProductToOrderCollection(dataToAddToCart));
		setQuantity(1);
	};

	if (count === 0) return <div>Kontakt ze sklepem</div>;

	return (
		<div className={styles.AddToCartButton__container}>
			<Quantity
				maxQuantity={count}
				quantity={quantity}
				setQuantity={setQuantity}
			/>
			<button
				className={styles.AddToCartButton__container__button}
				onClick={handleAddToCart}
				disabled={isLoading}
			>
				{isLoading ? (
					<div className={styles.spinner__container}>
						<ProgressActivityIcon className={styles.spinner__container__svg} />
					</div>
				) : null}
				Dodaj do koszyka
			</button>
		</div>
	);
};

export default AddToCartButton;
