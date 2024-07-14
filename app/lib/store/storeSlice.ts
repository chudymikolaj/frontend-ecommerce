import { createSlice } from "@reduxjs/toolkit";

interface StoreStateInterface {
	user: any | null;
	items: { idProduct: string; slug: string; name: string; price: number; count: number; quantity: number }[];
}

const initialState: StoreStateInterface = {
	user: null,
	items: [],
};

const storeSlice = createSlice({
	name: "store",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload;
			const existingItem = state.items.find((i) => i.idProduct === item.idProduct);

			if (existingItem) {
				existingItem.quantity += item.quantity;
			} else {
				state.items.push({ ...item });
			}
		},
		removeFromCart: (state, action) => {
			const itemId = action.payload;
			state.items = state.items.filter((i) => i.idProduct !== itemId);
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = storeSlice.actions;

export default storeSlice.reducer;
