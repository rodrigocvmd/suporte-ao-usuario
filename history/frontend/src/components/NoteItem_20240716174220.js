import { useSelector } from "react-redux";

function NoteItem({ note }) {
	const { user } = useSelector((state) => state.auth);

	return <div className="note" style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0"
    }}></div>;
}

export default NoteItem;
