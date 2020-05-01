import {
	AUTH_REQUEST, GET_USER_INFO,
	LOGINED_USER,
	LOGOUT_USER,
	REGISTERED_USER,
	USER_INFO_IN_LOCALSTORAGE
} from '../constants/actions'

let user = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
const initialState = user ?
	{ isAuthenticated: true, loading: false, ...user } :
	{ isAuthenticated: false, loading: false };

const AuthUser = (state = initialState, action) => {
	if (state === undefined) {
		return { isAuthenticated: false }
	}

	switch (action.type) {
		case AUTH_REQUEST:
			return {
				...state,
				loading: action.payload
			}

		case REGISTERED_USER:
			return {
				...state,
				user: {...action.payload},
				loading: false
			}

		case LOGINED_USER:
			return {
				isAuthenticated: true,
				loading: false,
				...action.payload
			}

		case GET_USER_INFO:
			return {
				...state,
				loading: false,
				...action.payload
			}

		case LOGOUT_USER:
			return {
				isAuthenticated: false,
				loading: false
			}

		default:
			return state;
	}
}

export default AuthUser