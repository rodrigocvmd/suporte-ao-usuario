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

//Criar nova ocorrência
export const register = createAsyncThunk("tickets/create", async (ticketData, thunkAPI) => {
	try {
		return await ticketService.createAsyncThunk(user);
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
