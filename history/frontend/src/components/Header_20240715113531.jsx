import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/">Suporte</Link>
			</div>
			<ul>
				<li>
					<Link to="/login">
						<FaSignInAlt /> Login
					</Link>
				</li>
				<li>
					<Link to="/register">
						<FaUser /> Re
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
