import { useSelector } from "react-redux";

function NoteItem({ note }) {
	const { user } = useSelector((state) => state.auth);

	return <div className="note" style={{
        backgournd
    }}></div>;
}

export default NoteItem;
