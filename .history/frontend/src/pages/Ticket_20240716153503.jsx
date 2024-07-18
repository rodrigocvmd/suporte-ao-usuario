import { useDispatch, useSelector } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";



function Ticket() {
    const{ticket, isLoading, isSuccess, isError, message}  = useSelector((this.state.))
    
	return <div>Ticket</div>;
}

export default Ticket;
