import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
	return (
		<>
			<section className="heading">
				<h1>
					Com o que você precisa de suporte?
					<p>Por favor, escolha uma das opções abaixo</p>
				</h1>
			</section>

			<Link to="/new-ticket" className="btn btn-reverse btn-block">
			<FaQuestionCircle/>Criar uma nova ocorrência
			</Link>
			<Link to="/tickets" className="btn btn-block">
			<FaQuestionCircl/>Criar uma nova ocorrência
			</Link>
		</>
	);
}

export default Home;
