const express = require("express");
const router = express.Router();
const { getTickets, getTicket, createTicket } = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

router.route("/:id").get(protect, getTicket).delete(protect, deleteTicket).pu

module.exports = router;
