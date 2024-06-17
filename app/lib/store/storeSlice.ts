import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	user: any | null;
}

const initialState: AuthState = {
	user: null,
};

const authSlice = createSlice({
	name: "store",
	initialState,
	reducers: {},
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
