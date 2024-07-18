const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		product: {
			type: String,
			required: [true, "Por favor, selecione um produto"],
			enum: ["iPhone", "Macbook Pro", "iMac", "iPad"],
		},
		description: {
			type: String,
			required: [true, "Por favor, insira uma descrição do problema"],
		},
		status: {
			type: String,
			required: true,
			enum: ["nova", "aberto", "encerrada"],
			default: "nova",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Ticket", ticketSchema);
