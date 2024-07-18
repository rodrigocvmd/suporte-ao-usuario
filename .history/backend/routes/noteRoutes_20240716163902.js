const express = require("express")
const router = express.Router()
const {getNotes} = require("../controllers/noteControl")

const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect, getNotes)