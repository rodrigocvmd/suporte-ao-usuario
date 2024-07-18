import { useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	return (
		<>
			<section className="heading">

                <h1></h1>
            </section>
		</>
	);
}

export default Register;
