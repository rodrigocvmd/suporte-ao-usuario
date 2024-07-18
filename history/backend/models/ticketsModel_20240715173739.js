const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		email: {
			type: String,
			required: [true, "Por favor, selecione um produto"],
			enum: ["iPhone", "Macbook Pro", "iMac"]
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
