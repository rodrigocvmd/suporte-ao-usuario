import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons";
import { Link } from "react-router-dom";

function Header() {
	return <header className="header">
        <div className="logo">
            <Link to="/">
            Supor
            </Link>
        </div>
    </header>;
}

export default Header;
