import { useDispatch, useSelector } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Ticket() {
	const { ticket, isLoading, isSuccess, isError, message } = useSelector((state) => state.tickets);
	const dispatch = useDispatch();
	const params = useParams();
	const { ticketId } = useParams();

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		dispatch(getTicket(ticketId));
	}, [isError, message, ticketId]);

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <h3>Algo deu errado</h3>;
	}

	return <div className="ticket-page">
        <header className="ticket-header">
            <BackButton url="/tickets" />
            <h2></h2>
        </header>
    </div>;
}

export default Ticket;
