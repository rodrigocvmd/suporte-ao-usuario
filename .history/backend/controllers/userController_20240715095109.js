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

	if (userExists) {
		res.status(400);
		throw new Error("Este usuário já existe");
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Criar usuário
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error("Informações de usuário inválidas");
	}
});

// @desc Logar usuário
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findO;

	res.send("Login route");
});

module.exports = {
	registerUser,
	loginUser,
};