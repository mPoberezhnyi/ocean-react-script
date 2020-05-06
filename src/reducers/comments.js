import {
	COMMENT_ADDED,
	COMMENT_CHANGED,
	COMMENT_REMOVED,
	COMMENTS_REQUEST,
	FETCH_COMMENTS_SUCCESS
} from "../constants/actions";

const Comments = (state, action) => {
	if (state === undefined) {
		return {
			list: [],
			loading: true
		}
	}

	switch (action.type) {
		case COMMENTS_REQUEST:
			return {
				list: [...state.list],
				loading: true
			};

		case COMMENT_ADDED:
			return {
				list: action.payload,
				loading: false
			};

		case COMMENT_CHANGED:
			return {
				list: action.payload,
				loading: false
			};

		case COMMENT_REMOVED:
			return {
				list: action.payload,
				loading: false
			};

		case FETCH_COMMENTS_SUCCESS:
			return {
				list: action.payload,
				loading: false
			};

		default:
			return state;
	}
}

export default Comments