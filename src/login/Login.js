import React from "react";
import submitCredentials from "../redux/actions/sumbitCredentials";
import { connect } from "react-redux";

class Login extends React.Component {
	componentDidMount() {
		const userCredentials = {
			username: "RXNyqzAG",
			password: "8317f8OJGP32"
		};
		this.props.submitCredentials(userCredentials);
	}
	render() {
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
						<button id="submitLoginForm">Log in</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	submitCredentials: userCredentials =>
		dispatch(submitCredentials(userCredentials))
});
export default connect(
	null,
	mapDispatchToProps
)(Login);
