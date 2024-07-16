import { ProductImageType } from "../services/baseService.types";

export type CartStateInterface = {
	items: {
		idProduct: string;
		slug: string;
		name: string;
		price: number;
		count: number;
		quantity: number;
		image: ProductImageType;
	}[];
	productCount: number;
};

export type UserStateInterface = {
	user: any | null;
};
