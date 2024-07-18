const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
	res.json({me});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
