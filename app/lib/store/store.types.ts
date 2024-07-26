import { SerializedError } from "@reduxjs/toolkit";
import { ProductImageType } from "@services/baseService.types";

export type CartItem = {
	IdProduct: string;
	Slug: string;
	Name: string;
	Price: number;
	Image: ProductImageType; // Image can be an object with an id or just a number
	Quantity: number;
};

export type CartItemUpdate = {
	IdProduct: string;
	Slug: string;
	Name: string;
	Price: number;
	Image: { data: { id: number } }; // Image as an id for updates
	Quantity: number;
};

export type CartStateInterface = {
	basketSync: string | null;
	items: CartItem[];
	productCount: number;
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: SerializedError | string | null;
	currentRequestCartId?: string;
};

export type GetProductToOrderCollectionResponse = {
	data: [
		{
			id: number;
			attributes: {
				BasketToken: string;
				Products: CartItemUpdate[] & CartItem[];
			};
		}
	];
};

export type GetProductToOrderCollectionBuilderResponse = {
	id: number;
	attributes: {
		BasketToken: string;
		Products: CartItem[];
	};
};

export type PostProductToOrderCollectionResponse = {
	data: {
		attributes: {
			BasketToken: string;
			Products: CartItem[];
		};
	};
};

export type PostProductToOrderCollectionFulfilledType = {
	BasketToken: string;
	Products: CartItem[];
};

export type PostProductToOrderCollectionProps = {
	IdProduct: string;
	Slug: string;
	Name: string;
	Price: number;
	Image: { data: { id: number } }; // Image as object with id for posting
	Quantity: number;
};
