import axios from "axios";

const API_URL = "/api/users";

//Cadastrar usuário
const register = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));

		return response.data;
	}
};

// Logar usuário
const login = async (userData) => {
	const response = await axios.post(API_URL + "login", userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));

		return response.data;
	}
};

//Logout
const logout = () => localStorage.removeItem("user");

const authService = {
	register,
	logout,
    
};

export default authService;
