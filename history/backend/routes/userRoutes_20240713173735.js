const express = require("express");
const router = express.Router();
const {re} = require("../controllers/userController")

router.post("/", (req, res) => {
	res.send("Register Route");
});

router.post("/login", (req, res) => {
	res.send("Login Route");
});

module.exports = router;
