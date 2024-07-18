import { useDispatch, useSelector } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

function Ticket() {
	const { ticket, isLoading, isSuccess, isError, message } = useSelector((state) => state.tickets);

    const params = useParams


	return <div>Ticket</div>;
}

export default Ticket;
