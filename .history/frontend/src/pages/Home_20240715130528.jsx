import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
	return (
		<>
			<section className="heading">
				<h1>
					Com o que você precisa de suporte?
					
				</h1>
				
			</section>

			<Link to="/new-ticket" className="btn btn-reverse btn-block">
				<FaQuestionCircle />
				Criar uma nova ocorrência
			</Link>
			<Link to="/tickets" className="btn btn-block">
				<FaTicketAlt />
				Minhas ocorrências
			</Link>
		</>
	);
}

export default Home;
