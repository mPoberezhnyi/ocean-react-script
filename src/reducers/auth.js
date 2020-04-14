import { USER_INFO_IN_LOCALSTORAGE } from '../constants/actions'

let user = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
const initialState = user ? { isAuthenticated: true, ...user } : { isAuthenticated: false };

const AuthUser = (state = initialState, action) => {
	if (state === undefined) {
		return { isAuthenticated: false }
	}

	switch (action.type) {
		case 'REGISTERED_USER':
			return {
				...state,
				...action.payload
			};

		case 'LOGINED_USER':
			return {
				isAuthenticated: true,
				...action.payload
			};

		case 'LOGOUT_USER':
			return { isAuthenticated: false };

		default:
			return state;
	}
}

export default AuthUser