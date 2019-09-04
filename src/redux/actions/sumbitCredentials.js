import sendRequest from "../../lib/authRequest";
const submitCredentials = (url, userCredentials) => dispatch => {
	return sendRequest(url, userCredentials)
		.then(data => {
			console.log("success");
			dispatch({
				type: "LOGIN_USER",
				payload: data
			});
		})
		.catch(err => console.error("invalid username or parrword"));
};

export default submitCredentials;
