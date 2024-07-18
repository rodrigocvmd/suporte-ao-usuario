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
			ref: "Ticket",
		},
		text: {
			type: String,
			required: [true, "Por favor, insira algo no campo"],
		},
		isStaff: {
			type: Boolean,
			default: false,
		},
		staff: {
			type: String,
		
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Ticket", ticketSchema);
