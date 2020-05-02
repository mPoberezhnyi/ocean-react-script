import {CLEAR_MESSAGE, SET_MESSAGE} from "../constants/actions";

const setMessage = (payload) => {
	return {
		type: SET_MESSAGE,
		payload
	}
}

const clearMessage = () => () => (dispatch) => {
	dispatch({
		type: CLEAR_MESSAGE
	})
}

export {
	clearMessage,
	setMessage
}