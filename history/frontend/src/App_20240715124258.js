import { BrowserRouter as , Routes, Route } from "react-router-dom";
import { Router } from "express";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
