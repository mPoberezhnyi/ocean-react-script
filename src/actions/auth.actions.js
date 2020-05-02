import {
	AUTH_REQUEST,
	GET_USER_INFO,
	LOGINED_USER, LOGOUT_USER,
	REGISTERED_USER,
	USER_INFO_IN_LOCALSTORAGE
} from "../constants/actions";
import { setMessage } from './messages.actions'

const AuthRequest = (payload) => {
	return {
		type: AUTH_REQUEST,
		payload
	}
}

const userRegistred = (userInfo) => {
	return {
		type: REGISTERED_USER,
		payload: userInfo
	}
}

const userLogined = (userInfo) => {
	return {
		type: LOGINED_USER,
		payload: userInfo
	}
}

const getUserInfo = (userInfo) => {
	return {
		type: GET_USER_INFO,
		payload: userInfo
	}
}

const userLogout = () => {
	return {
		type: LOGOUT_USER
	}
}

const registerUser = (storeService) => (payload) => async (dispatch) => {
	try {
		dispatch(AuthRequest(true))
		const { data: { email, message } } = await storeService.register(payload)
		dispatch(userRegistred({email}))
		dispatch(setMessage({
			type: 'success',
			text: message
		}))
	}
	catch ({message}) {
		dispatch(setMessage({
			type: 'danger',
			text: message
		}))
		dispatch(AuthRequest(false))
		console.log('Server error: ', message)
	}
}

const loginUser = (storeService) => (payload) => async (dispatch) => {
	try {
		dispatch(AuthRequest(true))
		const { data } = await storeService.login(payload)
		localStorage.setItem(USER_INFO_IN_LOCALSTORAGE, JSON.stringify(data))
		dispatch(userLogined(data))
	}
	catch ({message}) {
		dispatch(AuthRequest(false))
		console.log('Server error: ', message)
	}
}

const getProfileFetch = (storeService) => () => async (dispatch) => {
	try {
		dispatch(AuthRequest(true))
		const userDate = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));

		if (userDate) {
			const {data: { isUser } } = await storeService.getProfile(userDate.token)

			if (!isUser) {
				const { data: { token } } = await storeService.updateToken(userDate.refreshToken)
				const newUserData = {
					...userDate,
					token
				}
				localStorage.setItem(USER_INFO_IN_LOCALSTORAGE, JSON.stringify(newUserData))
				dispatch(userLogined(newUserData))
			}
		}
		dispatch(AuthRequest(false))

	} catch ({message}) {
		localStorage.removeItem(USER_INFO_IN_LOCALSTORAGE)
		dispatch(userLogout())
		console.log('Server error: ', message)
	}
}

const getUser = (storeService) => () => async (dispatch) => {
	try {
		dispatch(AuthRequest(true))
		const { token } = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
		const { data } = await storeService.getUserInfo(token)
		dispatch(getUserInfo(data))
	}
	catch ({message}) {
		dispatch(AuthRequest(false))
		console.log('Server error: ', message)
	}
}

const logoutUser = (storeService) => () => async (dispatch) => {
	try {
		const { refreshToken } = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
		await storeService.logoutUser(refreshToken)
		localStorage.removeItem(USER_INFO_IN_LOCALSTORAGE)
		dispatch(userLogout())
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

export {
	registerUser,
	loginUser,
	getProfileFetch,
	getUser,
	logoutUser
}