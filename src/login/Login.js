import React from "react";
import submitCredentials from "../redux/actions/sumbitCredentials";
import { connect } from "react-redux";
import sendRequest from "../lib/authRequest";
import { withFormik } from "formik";

class Login extends React.Component {
	componentDidMount() {
		// this.props.submitCredentials(url, userCredentials);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleSubmit(e);
	};
	render() {
		console.log(this.props);
		const userCredentials = JSON.stringify({
			username: "RXNyqzAG",
			password: "8317f8OJGP32"
		});
		const url =
			"http://frontend-recruitment.one2tribe.pl:8080/api/authenticate";

		const { handleChange, handleSubmit } = this.props;
		return (
			<div className="loginWrapper">
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
						<button
							type="submit"
							id="submitLoginForm"
							// onClick={() => this.props.submitCredentials(url, userCredentials)}
						>
							Log in
						</button>
					</div>
				</form>
			</div>
		);
	}
}

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

		props.submitCredentials(url, myUserCredentials);
	},
	validateOnBlur: false,
	validateOnChange: false,
	isInitialValid: true
};
export default connect(
	null,
	mapDispatchToProps
)(withFormik(form)(Login));
