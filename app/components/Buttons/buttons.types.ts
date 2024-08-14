import type { ProductImageType } from "@services/baseService.types";

export type PrimaryButtonPropsType = {
	linkTo: string;
	name: string;
};

export type AddToCartButtonProps = {
	idProduct: string;
	slug: string;
	name: string;
	price: number;
	count: number;
	image: ProductImageType;
};

export type AddToCartButtonPropsType = {
	productData: AddToCartButtonProps;
	extendedClass: string;
};
