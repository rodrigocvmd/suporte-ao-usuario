const express = require("express")
const router = express.Router()
const {getNotes} = require("../controllers/")

const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect, getNotes)