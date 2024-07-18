import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

//Registrar nova usuário
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
	try {
		return await authService.register(user);
	} catch (error) {
		const message = (error.response && error, reso);
	}
});

//Logar usuário
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
	console.log(user);
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default authSlice.reducer;
