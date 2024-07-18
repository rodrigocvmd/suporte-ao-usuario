const mongoose = require("mongoose");

const uSchema = mongoose.Schema(
	{
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
			required: [true, "Por favor, insira uma senha"],
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
