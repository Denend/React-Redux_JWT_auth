import React from "react";
import fetchNote from "../redux/actions/sumbitNote";
import { connect } from "react-redux";
import fetchAllNotes from "../redux/actions/getAllNotes";
import { withFormik } from "formik";
import { notyError } from "../lib/noty";

class Notes extends React.Component {
	componentDidMount() {
		this.props.fetchAllNotes();
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleSubmit(e);
	};
	render() {
		const { allNotes, handleChange } = this.props;
		return (
			<div className="notesContainer">
				<div>
					<h2>Type something here</h2>
					<form className="notesForm" onSubmit={this.handleSubmit}>
						<input
							id="noteInput"
							placeholder="Type something here"
							type="text"
							onChange={handleChange}
						></input>
						<button type="submit">Submit</button>
					</form>
				</div>
				<aside className="notesWrapper">
					<ul>
						{allNotes
							? allNotes.map((note, index) => (
									<li key={index} id={note.id}>
										{note.name}
									</li>
							  ))
							: ""}
					</ul>
				</aside>
			</div>
		);
	}
}

const form = {
	mapPropsToValues: ({ inputValues }) => inputValues,

	handleSubmit: (values, { props }) => {
		const { noteInput } = values;
		const myNote = JSON.stringify({
			name: noteInput
		});
		if (noteInput) {
			props.fetchNote(myNote);
			props.fetchAllNotes();
		} else {
			notyError("cant submit empty field");
		}
	},
	validateOnBlur: false,
	validateOnChange: false,
	isInitialValid: true
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchNote: note => dispatch(fetchNote(note, ownProps)),
	fetchAllNotes: () => dispatch(fetchAllNotes())
});

const mapStateToProps = state => ({
	allNotes: state.notesReducer.notes
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withFormik(form)(Notes));
