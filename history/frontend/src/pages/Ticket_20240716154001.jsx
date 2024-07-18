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
    const {ticketId}=useParams()

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		dispatch(getTicket(ticket));
	}, [isError, mes]);

	return <div>Ticket</div>;
}

export default Ticket;
