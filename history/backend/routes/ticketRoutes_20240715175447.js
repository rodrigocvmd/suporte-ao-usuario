const express = require("express");
const router = express.Router();
const {} = require(">>")

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

module.exports = router;
