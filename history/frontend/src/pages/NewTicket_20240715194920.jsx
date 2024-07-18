import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
	const { user } = useSelector((state) => state.auth);
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [product, setProduct] = useState("iPhone");
	const [description, setDescription] = useState("");

	return (
		<>
			<section className="heading">
				<h1>Criar nova ocorrência</h1>
				<p>Por favor preencha o formulário abaixo</p>
			</section>

            sec
		</>
	);
}

export default NewTicket;
