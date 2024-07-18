import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";

function NewTicket() {
	const { user } = useSelector((state) => state.auth);
	const { isLoading, isError, isSuccess, message } = useSelector((state) => state.ticket);
	const [name] = useState(user.name);
	const [email] = useState(user.email);
	const [product, setProduct] = useState("iPhone");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
	});

	if(isSuccess)

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createTicket({ product, description }));
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
					<div className="form-group">
						<label htmlFor="product">Produto</label>
						<select
							name="product"
							id="product"
							value={product}
							onChange={(e) => setProduct(e.target.value)}>
							<option value="iPhone">iPhone</option>
							<option value="Macbook Pro">Macbook Pro</option>
							<option value="iMac">iMac</option>
							<option value="iPad">iPad</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="description">Descrição do problema</label>
						<textarea
							name="description"
							id="description"
							className="form-control"
							placeholder="Descrição"
							value={description}
							onChange={(e) => setDescription(e.target.value)}></textarea>
					</div>
					<div className="form-group">
						<button className="btn btn-block">Enviar</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default NewTicket;
