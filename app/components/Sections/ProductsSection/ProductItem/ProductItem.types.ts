import type { ProductImageAttributesType, ProductImageType } from "@services/baseService.types";
import { MouseEventHandler } from "react";

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
	onClick: (e: { preventDefault: () => void }) => void;
};
