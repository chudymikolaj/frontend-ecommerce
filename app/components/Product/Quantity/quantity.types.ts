import { Dispatch, SetStateAction } from "react";

export type QuantityProps = {
	maxQuantity: number;
	quantity: number;
	setQuantity: Dispatch<SetStateAction<number>>;
};
