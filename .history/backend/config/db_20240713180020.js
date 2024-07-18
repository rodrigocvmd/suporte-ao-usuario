const mongoose = require("mongoose");

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Mongo Connected: ${conn.connection.host}`.cyan.under);
	} catch (error) {}
};
