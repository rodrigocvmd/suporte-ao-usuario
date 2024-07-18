import axios from "axios";

const API_URL = "/api/tickets/";

// Buscar notas de ocorrências
const getNotes = async (ticketId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + ticketId + "/notes", config);

	return response.data;
};

// Criar nota de ocorrência
const createNote = async (noteTex, ticketId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(
		API_URL + ticketId + "/notes",
		{
			text: noteText,
		},
		config
	);

	return response.data;
};

const noteService = {
	getNotes,
    c
};

export default noteService;
