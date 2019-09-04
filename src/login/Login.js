import React from "react";
import submitCredentials from "../redux/actions/sumbitCredentials";
import { connect } from "react-redux";
import sendRequest from "../lib/authRequest";

class Login extends React.Component {
	componentDidMount() {
		// this.props.submitCredentials(url, userCredentials);
	}
	render() {
		const userCredentials = JSON.stringify({
			username: "RXNyqzAG",
			password: "8317f8OJGP32"
		});
		const url =
			"http://frontend-recruitment.one2tribe.pl:8080/api/authenticate";
		return (
			<div className="loginWrapper">
				<br />
				<form className="SignUpForm">
					<div>
						<input
							id="inputEmail"
							placeholder="Enter your email"
							type="email"
						></input>
						<br />
						<input
							id="inputPass"
							placeholder="Enter your password"
							type="password"
						></input>
						<br />
						<button
							type="button"
							id="submitLoginForm"
							onClick={() => this.props.submitCredentials(url, userCredentials)}
						>
							Log in
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	submitCredentials: (url, userCredentials) =>
		dispatch(submitCredentials(url, userCredentials))
});
export default connect(
	null,
	mapDispatchToProps
)(Login);
