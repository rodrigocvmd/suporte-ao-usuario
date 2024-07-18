import { useSelector } from "react-redux";

function NoteItem({ note }) {
	const { user } = useSelector((state) => state.auth);

	return (
		<div
			className="note"
			style={{
				backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : "#fff",
				color: note.isStaff ? "#fff" : "#000",
			}}>
                <h4>
                    N
                </h4>
            </div>
	);
}

export default NoteItem;
