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
					console.log(data);
					dispatch({
						type: "FETCH_NOTE",
						payload: data
					});
					//console.log(data);
					// if (data.message) {
					// 	// An error will occur if the token is invalid.
					// 	// If this happens, you may want to remove the invalid token.
					// 	localStorage.removeItem("my-jwt");
					// 	console.log("token WAS REMOVED");
					// } else {
					// 	// do redirect here
					// }
				})
				.catch(err => {
					//localStorage.removeItem("my-jwt");
					console.log("token WAS REMOVED");
					console.log("session expired or smth went wrong");
					ownProps.history.push("/login");
				});
		} else {
			console.log("not authorized");
			ownProps.history.push("/login");
		}
	};
};
export default fetchNote;
