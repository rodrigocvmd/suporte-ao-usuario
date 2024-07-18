import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
    const {user}=useSelector((state)=>state.auth)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [product, setProduct] = useState("iPho")
    const [email, setEmail] = useState(user.email)
    
	return (
		<div>
			<h1>Nova ocorrência</h1>
		</div>
	);
}

export default NewTicket;
