import axios from "axios";
import { createAsyncThunk, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import type {
	CartStateInterface,
	PostProductToOrderCollectionResponse,
	GetProductToOrderCollectionResponse,
	PostProductToOrderCollectionProps,
	PostProductToOrderCollectionFulfilledType,
	CartItemUpdate,
	CartItem,
} from "./store.types";

const getBasketSyncToken = (): string | null => {
	if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
		return localStorage.getItem("basketSync");
	}
	return null;
};

const basketSyncToken = getBasketSyncToken();

const initialState: CartStateInterface = {
	basketSync: basketSyncToken,
	items: [],
	productCount: 0,
	loading: "idle",
	error: null,
	currentRequestCartId: undefined,
};

// Thunk action for posting cart items
export const postProductToOrderCollection = createAsyncThunk(
	"cart/postProductToOrderCollectionStatus",
	async (item: PostProductToOrderCollectionProps, { rejectWithValue, extra, getState }) => {
		const config = extra as { apiUrl: string };
		const state = getState() as { cart: CartStateInterface };
		const basketSyncToken = state.cart.basketSync;

		try {
			const sendItem = {
				...item,
				Image: item.Image.data.id, // Use the image id directly
			};

			const headers = {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STORE_CART_ORDERS}`,
			};

			let response;

			if (basketSyncToken) {
				// Fetch existing cart data
				const cartResponse = await axios.get<GetProductToOrderCollectionResponse>(
					`${config.apiUrl}/api/carts?filters[BasketToken][$eq]=${basketSyncToken}&populate[Products][populate]=*&populate[BasketToken][populate]=*`,
					{ headers }
				);

				const existingCart = cartResponse.data.data[0];
				const existingProducts = existingCart.attributes.Products.map((product) => ({
					...product,
					Image: product.Image.data?.id || product.Image, // Ensure image is an id
				}));

				const existingProduct = existingProducts.find((product) => product.IdProduct === item.IdProduct);

				let updatedCartItems;

				if (existingProduct) {
					// Update the quantity of the existing product
					existingProduct.Quantity += item.Quantity;
					existingProduct.Image = item.Image.data.id; // Update image id

					let updatedArray = existingProducts.map((product) =>
						product.IdProduct === existingProduct.IdProduct ? existingProduct : product
					);

					updatedCartItems = {
						data: {
							Products: updatedArray,
						},
					};
				} else {
					// Add new item to the existing cart items
					updatedCartItems = {
						data: {
							Products: [...existingProducts, sendItem],
						},
					};
				}

				// Update the existing cart
				response = await axios.put<PostProductToOrderCollectionResponse>(
					`${config.apiUrl}/api/carts/${existingCart.id}?populate[Products][populate]=*&populate[BasketToken][populate]=*`,
					updatedCartItems,
					{ headers }
				);
			} else {
				// Create new cart
				const newCartItems = {
					data: { BasketToken: nanoid(), Products: [sendItem] },
				};

				response = await axios.post<PostProductToOrderCollectionResponse>(
					`${config.apiUrl}/api/carts?populate[Products][populate]=*&populate[BasketToken][populate]=*`,
					newCartItems,
					{ headers }
				);

				const getBasketToken = response.data.data.attributes.BasketToken;
				localStorage.setItem("basketSync", getBasketToken);
			}

			return response.data.data.attributes;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const getProductsFromOrderCollectionToCart = createAsyncThunk(
	"cart/getProductsFromOrderCollectionToCart",
	async (BasketToken: string | null, { rejectWithValue, extra }) => {
		const config = extra as { apiUrl: string };

		if (BasketToken === null) return;

		try {
			const headers = {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STORE_CART_ORDERS}`,
			};

			const response = await axios.get<GetProductToOrderCollectionResponse>(
				`${config.apiUrl}/api/carts?filters[BasketToken][$eq]=${BasketToken}&populate[Products][populate]=*&populate[BasketToken][populate]=*`,
				{ headers }
			);

			return response.data.data;
		} catch (error: any) {
			localStorage.removeItem("basketSync");
			return rejectWithValue(error.message);
		}
	}
);

// Slice
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		removeFromCart: (state, action: PayloadAction<{ IdProduct: string }>) => {
			const itemId = action.payload.IdProduct;
			const item = state.items.find((i) => i.IdProduct === itemId);

			if (item) {
				state.productCount -= item.Quantity;
				state.items = state.items.filter((i) => i.IdProduct !== itemId);
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.productCount = 0;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsFromOrderCollectionToCart.fulfilled, (state, action) => {
				state.loading = "succeeded";
				let items = action.payload;

				if (items != null && items[0]) {
					state.items = items[0]?.attributes.Products;
					state.basketSync = items[0]?.attributes.BasketToken;
				} else {
					state.loading = "idle";
					state.basketSync = null;
					localStorage.removeItem("basketSync");
				}

				state.productCount = state.items.reduce((count, item) => count + item.Quantity, 0);
			})
			.addCase(getProductsFromOrderCollectionToCart.rejected, (state, action) => {
				state.loading = "failed";
				localStorage.removeItem("basketSync");
			});
		builder
			.addCase(postProductToOrderCollection.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(
				postProductToOrderCollection.fulfilled,
				(state, action: PayloadAction<PostProductToOrderCollectionFulfilledType>) => {
					state.loading = "succeeded";
					const items = action.payload;

					const existingItemsMap = new Map(state.items.map((item) => [item.IdProduct, item]));
					items.Products.forEach((item) => {
						const existingItem = existingItemsMap.get(item.IdProduct);

						if (existingItem) {
							existingItem.Quantity = item.Quantity;
							existingItem.Image = item.Image; // Ensure the image id field is updated
						} else {
							state.items.push(item);
						}
					});

					state.basketSync = items.BasketToken;
					state.productCount = state.items.reduce((count, item) => count + item.Quantity, 0);
					state.error = null;
				}
			)
			.addCase(postProductToOrderCollection.rejected, (state, action) => {
				state.loading = "failed";
				state.error = typeof action.payload === "string" ? action.payload : "Something went wrong";
			});
	},
});

export const { removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
