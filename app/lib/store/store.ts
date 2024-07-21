import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./userSlice";
import cartReducer from "./cartSlice";

const config = {
	apiUrl: process.env.NEXT_PUBLIC_STRAPI_URL,
};

export const shopStore = () => {
	return configureStore({
		reducer: {
			user: authReducer,
			cart: cartReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: config,
				},
			}),
	});
};

// Infer the type of shopStore
export type AppStore = ReturnType<typeof shopStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;

// Inferred type: {auth: authReducer}
export type AppDispatch = AppStore["dispatch"];
