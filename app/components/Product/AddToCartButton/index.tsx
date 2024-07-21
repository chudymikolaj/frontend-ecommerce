"use client";

import { postProductToOrderCollection } from "@store/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import Quantity from "@components/Product/Quantity";

import { useState } from "react";
import styles from "./addToCartButton.module.scss";
import AddToCartButtonProps from "./addToCartButton.types";

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
						<svg
							className={styles.spinner__container__svg}
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
								opacity=".25"
							/>
							<path
								d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
								className={styles.spinner__container__svg_icon}
							/>
						</svg>
					</div>
				) : null}
				Dodaj do koszyka
			</button>
		</div>
	);
};

export default AddToCartButton;
