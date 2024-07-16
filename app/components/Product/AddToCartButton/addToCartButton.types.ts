import type { ProductImageType } from "@services/baseService.types";

type AddToCartButtonProps = {
	attributes: {
		idProduct: string;
		slug: string;
		name: string;
		price: number;
		count: number;
		image: ProductImageType;
	};
};

export default AddToCartButtonProps;
