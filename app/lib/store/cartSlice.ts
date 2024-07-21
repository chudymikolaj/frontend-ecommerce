import axios from "axios";
import { createAsyncThunk, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import type {
	CartStateInterface,
	CartItem,
	PostProductToOrderCollectionResponse,
	PostProductToOrderCollectionProps,
} from "./store.types";

const initialState: CartStateInterface = {
	items: [],
	productCount: 0,
	loading: "idle",
	error: null,
	currentRequestCartId: undefined,
};

// Thunk action for posting cart items
export const postProductToOrderCollection = createAsyncThunk(
	"cart/postProductToOrderCollectionStatus",
	async (item: PostProductToOrderCollectionProps, { rejectWithValue, extra }) => {
		const config = extra as { apiUrl: string };

		try {
			const sendItem = {
				...item,
				Image: item.Image.data.id,
			};

			const cartItems = {
				data: { BasketToken: nanoid(), Products: [sendItem] },
			};

			const headers = {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STORE_CART_ORDERS}`,
			};

			const response = await axios.post<PostProductToOrderCollectionResponse>(
				`${config.apiUrl}/api/carts?populate[Products][populate]=*`,
				cartItems,
				{
					headers,
				}
			);

			return response.data.data.attributes.Products;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

// Slice
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// addToCart: (state, action: PayloadAction<PostProductToOrderCollectionProps>) => {
		// 	const item = action.payload;
		// 	const existingItem = state.items.find((i) => i.IdProduct === item.IdProduct);

		// 	if (existingItem) {
		// 		existingItem.Quantity += item.Quantity;
		// 	} else {
		// 		state.items.push({ ...item });
		// 	}

		// 	state.productCount += item.Quantity;
		// },
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
			.addCase(postProductToOrderCollection.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(postProductToOrderCollection.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
				state.loading = "succeeded";

				const items = action.payload;
				const existingItemsMap = new Map(state.items.map((item) => [item.IdProduct, item]));

				items.forEach((item) => {
					const existingItem = existingItemsMap.get(item.IdProduct);
					if (existingItem) {
						existingItem.Quantity += item.Quantity;
					} else {
						state.items.push(item);
					}
				});

				state.productCount = state.items.reduce((count, item) => count + item.Quantity, 0);
				state.error = null;
			})
			.addCase(postProductToOrderCollection.rejected, (state, action) => {
				state.loading = "failed";
				state.error = typeof action.payload === "string" ? action.payload : "Something went wrong";
			});
	},
});

export const { removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
