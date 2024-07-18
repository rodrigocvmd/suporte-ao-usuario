import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
	notes: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

//Buscar no
export const getTicket = createAsyncThunk("tickets/get", async (ticketId, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await ticketService.getTicket(ticketId, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();

		return thunkAPI.rejectWithValue(message);
	}
});

export const noteSlice = createSlice({
	name: "note",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {},
});

export const { reset } = noteSlice.actions;
export default noteSlice.reducer;
