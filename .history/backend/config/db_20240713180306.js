const mongoose = require("mongoose");

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Mongo Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(`Erro: ${error.message}`.red.underline.bold);
        process.exitCode(1)
	}
};

module.exports = connect
