import { notySuccess, notyError } from "../../lib/noty";

const fetchNote = (note, ownProps) => {
  return dispatch => {
    const token = localStorage.getItem("my-jwt");
    console.log(token);
    if (token) {
      return fetch(
        "http://frontend-recruitment.one2tribe.pl:8080/api/v1/item",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: note
        }
      )
        .then(resp => resp.json())
        .then(data => {
          notySuccess("success");
          dispatch({
            type: "FETCH_NOTE",
            payload: data
          });
        })
        .catch(err => {
          localStorage.removeItem("my-jwt");
          notyError("toke likely invalid");
          ownProps.history.push("/login");
        });
    } else {
      console.log("not authorized");
      ownProps.history.push("/login");
    }
  };
};
export default fetchNote;
