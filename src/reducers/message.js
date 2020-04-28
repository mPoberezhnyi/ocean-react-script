import {
	SET_MESSAGE,
	CLEAR_MESSAGE
} from '../constants/actions'

const initialState = {
	type: '',
	text: ''
};

const Message = (state = initialState, action) => {
	if (state === undefined) {
		return initialState
	}

	switch (action.type) {
		case SET_MESSAGE:
			return {
				...action.payload
			}

		case CLEAR_MESSAGE:
			return {
				...initialState
			}

		default:
			return state;
	}
}

export default Message