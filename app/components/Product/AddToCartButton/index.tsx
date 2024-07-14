"use client";

import Quantity from "@components/Product/Quantity";

import AddToCartButtonProps from "./addToCartButton.types";
import styles from "./addToCartButton.module.scss";
import { useState } from "react";

const AddToCartButton = ({ attributes }: AddToCartButtonProps) => {
	const { idProduct, name, slug, price, count } = attributes;
	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = () => {
		const dataToAddToCart = {
			idProduct,
			name,
			slug,
			price,
			quantity,
		};

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
			>
				Dodaj do koszyka
			</button>
		</div>
	);
};

export default AddToCartButton;
