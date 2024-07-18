import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

ecreateAsyncThunk

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default authSlice.reducer;
