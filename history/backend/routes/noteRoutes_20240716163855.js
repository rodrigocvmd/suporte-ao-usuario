const express = require("express")
const router = express.Router()
const {getNotes} = require("../co")

const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect, getNotes)