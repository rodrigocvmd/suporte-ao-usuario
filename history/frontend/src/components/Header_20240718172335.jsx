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
					
						{/* Condicional para mostrar o link de login */}
						{currentPath !== "/login" && currentPath !== "/register" && (
							
								{currentPath !== "/register" && (
									<li>
										<Link to="/login" id="login">
											<FaSignInAlt /> Entrar
										</Link>
									</li>
								)}
								{currentPath !== "/login" && (
									<li>
										<Link to="/register" id="register">
											<FaUser /> Cadastrar
										</Link>
									</li>
								)}
							
				)}
			</ul>
		</header>
	);
}

export default Header;
