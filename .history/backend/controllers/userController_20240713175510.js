const asyncHandler = require("express-async-handler");

// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler() 

// @desc Login user
// @route /api/users/login
// @access Public
const loginUser = async (req, res) => {
	res.send("Login Route");
};

module.exports = {
	registerUser,
	loginUser,
};
