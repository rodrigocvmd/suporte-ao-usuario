import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ticketReducer from "../features/tickets/ticketSlice";

noteReduc
export const store = configureStore({
	reducer: {
		auth: authReducer,
		tickets: ticketReducer,
	},
});
