const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc Pegar ocorrências do usuário
// @route  /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
	
	res.status(200).json({message: "getTickets"});
});

// @desc Criar nova ocorrência
// @route /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
	
	res.status(200).json({message: "getTickets"});
});
