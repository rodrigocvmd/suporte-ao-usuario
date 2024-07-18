import e from "express";
import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
	const { user } = useSelector((state) => state.auth);
	const [name] = useState(user.name);
	const [email] = useState(user.email);
	const [product, setProduct] = useState("iPhone");
	const [description, setDescription] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="heading">
				<h1>Criar nova ocorrência</h1>
				<p>Por favor preencha o formulário abaixo</p>
			</section>

			<section className="form">
				<div className="form-group">
					<label htmlFor="name">Nome do usuário</label>
					<input type="text" value={name} disabled className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email do usuário</label>
					<input type="text" value={email} disabled className="form-control" />
				</div>
				<form onSubmit={onSubmit}>
					<label htmlFor="product">Produto</label>
					<select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
                        <option value="iPhone"></option>
                        <option value="Macbook"></option>
                        <option value="iPhone"></option>
                    </select>
				</form>
			</section>
		</>
	);
}

export default NewTicket;
