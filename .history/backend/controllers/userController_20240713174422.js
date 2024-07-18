// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = (req, res) => {
    const {name, email, password} = req.body

    //Validação
    if(!name || !email || !password){
        res.status(400).json({message: "Por favor, inclua t"})
    }
    
	res.send("Register Route");
};

// @desc Login user
// @route /api/users/login
// @access Public
const loginUser = (req, res) => {
	res.send("Login Route");
};

module.exports = {
	registerUser,
	loginUser,
};