import type { ProductImageAttributesType, ProductImageType } from "@services/baseService.types";

export type ProductItemPropsType = {
	attributes: {
		idProduct: string;
		name: string;
		slug: string;
		price: number;
		count: number;
		image: ProductImageType;
		productGallery: { data: ProductImageAttributesType[] };
		description: string;
	};
};
