const initialState = {
	note: "",
	myNotes: []
};
const notesReducer = (state = initialState, { type, payload }) => {
	{
		switch (type) {
			case "FETCH_NOTE": {
				return { ...state, note: payload };
			}
			case "GET_ALL_NOTES": {
				return { ...state, notes: payload };
			}

			default:
				return state;
		}
	}
};
export default notesReducer;
