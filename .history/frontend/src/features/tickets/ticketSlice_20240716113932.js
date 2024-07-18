import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
	tickets: [],
	ticket: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

//Criar n
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
	try {
		return await authService.register(user);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();

		return thunkAPI.rejectWithValue(message);
	}
});

export const ticketSlice = createSlice({
	name: "ticket",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {},
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
