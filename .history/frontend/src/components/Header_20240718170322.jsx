import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

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
					<>
						<li>
							<Link to="/login" className="e">
								<FaSignInAlt /> Entrar
							</Link>
						</li>
						<li>
							<Link to="/register">
								<FaUser /> Cadastrar
							</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	);
}

export default Header;
