import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
	return (
		<div className="ticket">
			<div>{new Date(ticket.createdAt).toLocaleString("pt-BR")}</div>
			<div>{ticket.product}</div>
			<div className={`status status-${ticket.status}`}>{ticket.status}</div>
			<Link to={`/ticket/${ticket._id}`} className="b"></Link>
		</div>
	);
}

export default TicketItem;
