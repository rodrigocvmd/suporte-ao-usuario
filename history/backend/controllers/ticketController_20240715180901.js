const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc Pegar ocorrências do usuário
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
	// Pegar usuário utilizando a id e o JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("Usuário não encontrado");
	}

	const tickets = await Ticket.find({ user: req.user.id });

	res.status(200).json(tickets);
});

// @desc Criar nova ocorrência
// @routePOST  /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
    const {product, desription} = req.body
    
    if(!product)
    
	res.status(200).json({ message: "createTicket" });
});

module.exports = {
	getTickets,
	createTicket,
};
