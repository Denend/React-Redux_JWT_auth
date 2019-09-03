const submitCredentials = userCredentials => {
	return dispatch => {
		return (
			fetch("http://frontend-recruitment.one2tribe.pl:8080/api/authenticate", {
				method: "POST",
				// headers: {
				// 	"Content-Type": "application/json"
				// 	//Accept: "application/json"
				// },
				body: JSON.stringify({ ...userCredentials })
			})
				//.catch(serverGetSearchError => console.log(serverGetSearchError))
				.then(resp => console.log(JSON.stringify(resp)))
				.then(data => {
					console.log(data);
					if (data && data.message) {
						console.error("invalid username or parrword");
					} else {
						//localStorage.setItem("token", data.jwt);
						dispatch({
							type: "LOGIN_USER",
							payload: data
						});
					}
				})
		);
	};
};
export default submitCredentials;
