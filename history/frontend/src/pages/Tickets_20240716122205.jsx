import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function Tickets() {
	const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets);

	const dispatch = useDispatch();

    useEffect(() => {
      return ()
    
      return () => {
        second
      }
    }, [third])
    

	useEffect(() => {
		dispatch(getTickets());
	}, [dispatch]);

	return <div></div>;
}

export default Tickets;
