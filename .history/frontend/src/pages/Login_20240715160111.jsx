import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const dispatch = useDispatch();

	const { user, isLoading, isSuccess, message } = useSelector((state) => state.auth);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const u
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> Entrar
				</h1>
				<p>Por favor, entre na sua conta para acessar o suporte</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={email}
							onChange={onChange}
							placeholder="Insira seu email"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							onChange={onChange}
							placeholder="Insira uma senha"
							required
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-block">Registrar</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
