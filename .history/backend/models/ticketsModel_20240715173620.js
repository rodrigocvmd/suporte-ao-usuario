const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: [true
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
