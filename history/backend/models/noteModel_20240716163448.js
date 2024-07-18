const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		ticket: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Tic",
		},
		description: {
			type: String,
			required: [true, "Por favor, insira uma descrição do problema"],
		},
		status: {
			type: String,
			required: true,
			enum: ["nova", "aberto", "fechado"],
			default: "nova",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Ticket", ticketSchema);
