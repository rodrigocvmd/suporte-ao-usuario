const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

// @desc Registrar um nova usuário
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	//Validação
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Por favor, preencha todos os campos");
	}

	// Verificar se usuário já existe
	const userExists = await User.findOne({ email });

	res.send("Register Route");
});

// @desc Logar usuário
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
	res.send("Login Route");
});

module.exports = {
	registerUser,
	loginUser,
};
