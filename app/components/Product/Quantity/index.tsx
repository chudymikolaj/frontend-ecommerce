"use client";

import { type ChangeEvent, useState } from "react";

import styles from "./quantity.module.scss";
import type { QuantityProps } from "./quantity.types";

const Quantity = ({ maxQuantity }: QuantityProps) => {
	const [quantity, setQuantity] = useState(1);
	const isQuantityLess = quantity <= 1;
	const isQuantityMore = quantity >= maxQuantity;

	const handleQuantityMinus = () => {
		setQuantity((prevState) => (isQuantityLess ? 1 : prevState - 1));
	};

	const handleQuantityPlus = () => {
		setQuantity((prevState) => (isQuantityMore ? maxQuantity : prevState + 1));
	};

	const handleQuantityInput = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, min, max } = event.target;
		const calcMaxValue = Math.max(Number(min), Math.min(Number(max), Number(value)));
		setQuantity(calcMaxValue);
	};

	return (
		<div className={styles.Quantity__container}>
			<button
				className={styles.Quantity__container_button}
				onClick={handleQuantityMinus}
				disabled={isQuantityLess}
			>
				<img
					src="/minus.svg"
					alt="action minus"
					className={styles.Quantity__container_button_icon}
				/>
			</button>
			<input
				className={styles.Quantity__container_input}
				type="number"
				value={quantity}
				onChange={handleQuantityInput}
				min="1"
				max={maxQuantity}
				autoComplete="off"
			/>
			<button
				className={styles.Quantity__container_button}
				onClick={handleQuantityPlus}
				disabled={isQuantityMore}
			>
				<img
					className={styles.Quantity__container_button_icon}
					src="/plus.svg"
					alt="action minus"
				/>
			</button>
		</div>
	);
};

export default Quantity;
