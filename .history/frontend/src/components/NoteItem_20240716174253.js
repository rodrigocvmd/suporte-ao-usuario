import { useSelector } from "react-redux";

function NoteItem({ note }) {
	const { user } = useSelector((state) => state.auth);

	return <div className="note" style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : #fff, 
        backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : #000, 
    }}></div>;
}

export default NoteItem;
