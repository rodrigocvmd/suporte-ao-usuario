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

            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Nome do usuário</label>
                    <input type="text" value={name} disabled className="form-control" />
                </div>
            </section>
		</>
	);
}

export default NewTicket;
