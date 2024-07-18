import { useDispatch, useSelector } from "react-redux";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getNotes, reset as notesReset } from "../features/notes/noteSlice";
import NoteItem from "../components/NoteItem";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

function Ticket() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [noteText, sendNoteText] = useState("");
	const { ticket, isLoading, isSuccess, isError, message } = useSelector((state) => state.tickets);
	const { notes, isLoading: notesIsLoading } = useSelector((state) => state.notes);

	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { ticketId } = useParams();

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		dispatch(getTicket(ticketId));
		dispatch(getNotes(ticketId));
		// eslint-disable-next-line
	}, [isError, message, ticketId]);

	// Fechar ocorrência
	const onTicketClose = () => {
		dispatch(closeTicket(ticketId));
		toast.success("Ocorrência encerrada");
		navigate("/tickets");
	};

	if (isLoading || notesIsLoading) {
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
				<h3>Produto: {ticket.product}</h3>
				<hr />
				<div className="ticket de">
					<h3>Descrição do problema</h3>
					<p>{ticket.description}</p>
				</div>
				<h2>Notes</h2>
			</header>

			{ticket.status !== "fechado" && (
				<b
			)}

			{notes.map((note) => (
				<NoteItem key={note._id} note={note} />
			))}

			{ticket.status !== "closed" && (
				<button className="btn btn-block btn-danger" onClick={onTicketClose}>
					Fechar ocorrência
				</button>
			)}
		</div>
	);
}

export default Ticket;
