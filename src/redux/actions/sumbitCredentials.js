import sendRequest from "../../lib/authRequest";
const submitCredentials = (url, userCredentials, ownProps) => dispatch => {
	return sendRequest(url, userCredentials)
		.then(data => {
			console.log("success");
			dispatch({
				type: "LOGIN_USER",
				payload: "yeeej no user data comes from request"
			});
			ownProps.history.push("/notes");
		})
		.catch(err => console.error("invalid username or parrword"));
};

export default submitCredentials;
