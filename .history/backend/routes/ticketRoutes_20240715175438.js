const express = require("express");
const router = express.Router();
cons

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

module.exports = router;
