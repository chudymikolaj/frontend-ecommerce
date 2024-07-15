import { createSlice } from "@reduxjs/toolkit";

interface CartStateInterface {
	items: { idProduct: string; slug: string; name: string; price: number; count: number; quantity: number }[];
	productCount: number;
}

const initialState: CartStateInterface = {
	items: [],
	productCount: 0,
};

const cartSlice = createSlice({
	name: "cart",
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

			state.productCount += item.quantity;
		},
		removeFromCart: (state, action) => {
			const itemId = action.payload.idProduct;
			state.items = state.items.filter((i) => i.idProduct !== itemId);
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
