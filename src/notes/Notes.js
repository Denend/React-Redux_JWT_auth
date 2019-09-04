import React from "react";
import fetchNote from "../redux/actions/sumbitNote";
import { connect } from "react-redux";
import fetchAllNotes from "../redux/actions/getAllNotes";
import { withFormik } from "formik";

class Notes extends React.Component {
	componentDidMount() {
		this.props.fetchAllNotes();
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleSubmit(e);
	};
	render() {
		console.log(this.props);
		//change button to submit later
		const { allNotes, handleChange } = this.props;
		console.log(allNotes);
		return (
			<div className="notesContainer">
				<h2>Type something here</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						id="noteInput"
						placeholder="Type something here"
						type="text"
						onChange={handleChange}
					></input>
					<button
						type="submit"
						// onClick={() =>
						// 	this.props.fetchNote(JSON.stringify({ name: "some test note" }))
						// }
					>
						Submit
					</button>
				</form>
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
		const url =
			"http://frontend-recruitment.one2tribe.pl:8080/api/authenticate";
		props.fetchNote(myNote);
		props.fetchAllNotes();
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
