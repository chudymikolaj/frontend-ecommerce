import { createSlice } from "@reduxjs/toolkit";

interface UserStateInterface {
	user: any | null;
}

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
