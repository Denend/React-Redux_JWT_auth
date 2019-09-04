import React from "react";

class Notes extends React.Component {
	render() {
		//change button to submit later
		return (
			<div className="notesContainer">
				<h2>Type something here</h2>
				<form>
					<input
						id="Notes"
						placeholder="Type something here"
						type="text"
					></input>
					<button type="button">Submit</button>
				</form>
			</div>
		);
	}
}
export default Notes;
