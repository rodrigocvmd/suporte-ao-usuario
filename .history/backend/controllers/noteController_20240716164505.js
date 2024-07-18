const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");
const Note = require("../models/noteModel");

// @desc Pegar notas de uma ocorrência
// @route GET /api/tickets
// @access Private
const getNotes = asyncHandler(async (req, res) => {
	// Pegar usuário utilizando a id e o JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("Usuário não encontrado");
	}

	const tickets = await Ticket.findById(req.params.ticketId);

    if(ticket.user.toString()!== req.user){
        res.status(401)
        throw new Error("Usuário não autoriza")
    }
    
	res.status(200).json(tickets);
});
