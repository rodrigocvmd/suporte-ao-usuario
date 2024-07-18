import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { registerUser } from "../../backend/controllers/userController";
registerUser


function App() {
	return <div>My App</div>;
}

export default App;
