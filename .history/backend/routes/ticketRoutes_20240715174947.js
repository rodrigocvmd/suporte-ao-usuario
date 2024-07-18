const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(prote)

module.exports = router;
