const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTicke).post()

module.exports = router;
