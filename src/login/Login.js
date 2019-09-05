import React from "react";
import submitCredentials from "../redux/actions/sumbitCredentials";
import { connect } from "react-redux";
import { withFormik } from "formik";
import { notyError } from "../lib/noty";

class Login extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.handleSubmit(e);
	};
	render() {
		const { handleChange } = this.props;
		return (
			<div className="loginWrapper">
				<h3>Please login to write some notes</h3>
				<br />
				<form className="SignUpForm" onSubmit={this.handleSubmit}>
					<div>
						<input
							id="inputUsername"
							placeholder="Enter your username"
							type="text"
							onChange={handleChange}
						></input>
						<br />
						<input
							id="inputPass"
							placeholder="Enter your password"
							type="password"
							onChange={handleChange}
						></input>
						<br />
						<button type="submit" id="submitLoginForm">
							Log in
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const validateInputs = values => {
	const { inputUsername, inputPass } = values;
	return inputUsername && inputPass;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	submitCredentials: (url, userCredentials) =>
		dispatch(submitCredentials(url, userCredentials, ownProps))
});

const form = {
	mapPropsToValues: ({ inputValues }) => inputValues,

	handleSubmit: (values, { props }) => {
		const { inputUsername, inputPass } = values;
		const myUserCredentials = JSON.stringify({
			username: inputUsername,
			password: inputPass
		});
		const url =
			"http://frontend-recruitment.one2tribe.pl:8080/api/authenticate";

		if (validateInputs(values)) {
			props.submitCredentials(url, myUserCredentials);
		} else {
			notyError("cant submit empty fields");
		}
	},
	validateOnBlur: false,
	validateOnChange: false,
	isInitialValid: true
};
export default connect(
	null,
	mapDispatchToProps
)(withFormik(form)(Login));
