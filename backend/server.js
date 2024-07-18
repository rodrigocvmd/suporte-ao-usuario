const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const path = require("path");

//Conectar ao banco de dados
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rotas
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// Servir frontend
if (process.env.NODE_ENV === "production") {
	//Setar a build como static
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (req, res) => res.sendFile(__dirname, "../", "frontend", "build", "index.html"));
} else {
	app.get("/api/users", (req, res) => {
		res.status(200).json({ message: "Bem-vindo(a) à Desk de Suporte" });
	});
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
