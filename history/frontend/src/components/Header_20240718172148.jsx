import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const location = useLocation()
	

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	const currentPath = location.pathname;

	return (
		<header className="header">
			<div className="logo">
				<Link to="/" style={{ fontWeight: "bold" }}>
					Suporte ao usuário
				</Link>
			</div>
			<ul>
				{user ? (
					<li>
						<button className="btn" onClick={onLogout}>
							<FaSignOutAlt />
							Sair
						</button>
					</li>
				) : (

					{currentPath !== "/login" && currentPath !== "/register" && (

					)

					
				)}
			</ul>
		</header>
	);
}

export default Header;
