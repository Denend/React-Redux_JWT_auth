const fetchAllNotes = () => {
	return dispatch => {
		const token = localStorage.getItem("my-jwt");
		console.log(token);
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
					console.log(data);
					dispatch({
						type: "GET_ALL_NOTES",
						payload: data
					});
				})
				.catch(err => {
					console.log("session expired or smth went wrong");
				});
		} else {
			console.log("not authorized");
		}
	};
};
export default fetchAllNotes;
