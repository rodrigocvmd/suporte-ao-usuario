const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		try {
			//Pegar token do header
			token = req.headers.authorization.split(" ")[1];
			//Verificar token
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //Pegar usuário do token
            
		} catch (error) {}
	}
});
