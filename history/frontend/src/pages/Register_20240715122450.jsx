import e from "express";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

    const onChange = (e) => e

	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register
				</h1>
				<p>Por favor, crie uma conta</p>
			</section>

			<section className="form">
				<form>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="name"
							value={name}
							onChange={onChange}
							placeholder="Insira seu nome"
						/>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register;
