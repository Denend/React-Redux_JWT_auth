import { notySuccess, notyError } from "../../lib/noty";
const fetchAllNotes = () => {
  return dispatch => {
    const token = localStorage.getItem("my-jwt");
    if (token) {
      return fetch(
        "http://frontend-recruitment.one2tribe.pl:8080/api/v1/item",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then(resp => resp.json())
        .then(data => {
          if (!data.error) {
            notySuccess("success");
            dispatch({
              type: "GET_ALL_NOTES",
              payload: data
            });
          } else {
            notyError("not authorized");
          }
        })
        .catch(err => {
          notyError("toke likely invalid");
        });
    } else {
      notyError("notAuthorized");
    }
  };
};
export default fetchAllNotes;
