import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/" element={<L />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </Router>
		</>
	);
}

export default App;
