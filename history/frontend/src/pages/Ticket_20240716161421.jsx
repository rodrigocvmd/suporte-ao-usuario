import { useDispatch, useSelector } from "react-redux";
import { getTicket, reset, closeTicket } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Ticket() {
	const { ticket, isLoading, isSuccess, isError, message } = useSelector((state) => state.tickets);
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { ticketId } = useParams();

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		dispatch(getTicket(ticketId));
		// eslint-disable-next-line
	}, [isError, message, ticketId]);

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <h3>Algo deu errado</h3>;
	}

	return (
		<div className="ticket-page">
			<header className="ticket-header">
				<BackButton url="/tickets" />
				<h2>
					ID da Ocorrência: {ticket._id}
					<span className={`status status-${ticket.status}`}>{ticket.status}</span>
				</h2>
				<h3>Data de abertura: {new Date(ticket.createdAt).toLocaleString("pt-BR")}</h3>
				<hr />
				<div className="ticket de">
					<h3>Descrição do problema</h3>
					<p>{ticket.description}</p>
				</div>
			</header>

			{ticket.status !== "closed" && <button className="btn btn-block btn-danger" onClick={onTicketClose}>Ocorrência fechada</button>}
		</div>
	);
}

export default Ticket;
