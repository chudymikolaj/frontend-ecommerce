import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./storeSlice";

export const shopStore = () => {
	return configureStore({
		reducer: {
			store: authReducer,
		},
	});
};

// Infer the type of shopStore
export type AppStore = ReturnType<typeof shopStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;

// Inferred type: {auth: authReducer}
export type AppDispatch = AppStore["dispatch"];
