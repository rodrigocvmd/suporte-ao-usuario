import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate()

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		//Redirecionar quando logado
		if(isSuccess || user){
			navv
		}
	}, []);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("As senhas não correspondem");
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Cadastrar {user}
				</h1>
				<p>Por favor, crie uma conta</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							value={name}
							onChange={onChange}
							placeholder="Insira seu nome"
							required
						/>
					</div>
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
						<input
							type="password"
							className="form-control"
							id="password2"
							name="password2"
							value={password2}
							onChange={onChange}
							placeholder="Confirme a senha"
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

export default Register;
