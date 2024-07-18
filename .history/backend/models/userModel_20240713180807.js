const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Por favor, insira o nome"],
	},
	email: {
		type: String,
		required: [true, "Por favor, insira o email"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Por favor, insira u"],
		unique: true,
	},
});
