import { SerializedError } from "@reduxjs/toolkit";
import { ProductImageType } from "../services/baseService.types";

export interface CartItem {
	IdProduct: string;
	Slug: string;
	Name: string;
	Price: number;
	Image: ProductImageType;
	Quantity: number;
}

export interface CartStateInterface {
	items: CartItem[];
	productCount: number;
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: SerializedError | string | null;
	currentRequestCartId?: string;
}

export interface PostProductToOrderCollectionResponse {
	data: {
		attributes: {
			Products: CartItem[];
		};
	};
}

export interface PostProductToOrderCollectionProps {
	IdProduct: string;
	Slug: string;
	Name: string;
	Price: number;
	Image: { data: { id: number } };
	Quantity: number;
}
