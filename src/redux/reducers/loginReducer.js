const initialState = {
	userData: {}
};
const loginReducer = (state = initialState, { type, payload }) => {
	{
		switch (type) {
			case "LOGIN_USER": {
				return { ...state, userData: payload };
			}

			default:
				return state;
		}
	}
};
export default loginReducer;
