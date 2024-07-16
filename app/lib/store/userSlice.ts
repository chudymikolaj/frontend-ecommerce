import { createSlice } from "@reduxjs/toolkit";
import type { UserStateInterface } from "./store.types";

const initialState: UserStateInterface = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
