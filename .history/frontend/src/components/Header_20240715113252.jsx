import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/">Suporte</Link>
			</div>
            
		</header>
	);
}

export default Header;
