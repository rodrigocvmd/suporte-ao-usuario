import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
    const {user}=useSelector((state)=>state.auth)
    
	return (
		<div>
			<h1>Nova ocorrência</h1>
		</div>
	);
}

export default NewTicket;
