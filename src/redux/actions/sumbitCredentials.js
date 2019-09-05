import sendRequest from "../../lib/authRequest";
import { notySuccess, notyError } from "../../lib/noty";
const submitCredentials = (url, userCredentials, ownProps) => dispatch => {
  return sendRequest(url, userCredentials)
    .then(data => {
      notySuccess("success");
      dispatch({
        type: "LOGIN_USER",
        payload: "yeeej no user data comes from request"
      });
      ownProps.history.push("/notes");
    })
    .catch(err => notyError("Incorrect credentials"));
};

export default submitCredentials;
