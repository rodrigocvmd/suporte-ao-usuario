import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
	const { user } = useSelector((state) => state.auth);
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [product, setProduct] = useState("iPhone");
	const [description, setDescription] = useState("");

	return (
		<>
		se	
		</>
	);
}

export default NewTicket;
