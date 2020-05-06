import {
	COMMENT_ADDED,
	COMMENT_CHANGED,
	COMMENT_REMOVED,
	COMMENTS_REQUEST,
	FETCH_COMMENTS_SUCCESS
} from "../constants/actions";

const commentsRequest = () => {
	return {
		type: COMMENTS_REQUEST
	}
}

const commentAdded = (list) => {
	return {
		type: COMMENT_ADDED,
		payload: list
	}
}

const commentChanged = (list) => {
	return {
		type: COMMENT_CHANGED,
		payload: list
	}
}

const commentRemoved = (list) => {
	return {
		type: COMMENT_REMOVED,
		payload: list
	}
}

const commentsLoaded = (list) => {
	return {
		type: FETCH_COMMENTS_SUCCESS,
		payload: list
	}
}

const addComment = (storeService) => (comment) => async (dispatch) => {
	try {
		dispatch(commentsRequest())
		const { data } = await storeService.addComment(comment)
		dispatch(commentAdded(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

const editComment = (storeService) => (comment) => async (dispatch) => {
	try {
		dispatch(commentsRequest())
		const { data } = await storeService.editComment(comment)
		dispatch(commentChanged(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

const removeComment = (storeService) => (id) => async (dispatch) => {
	try {
		dispatch(commentsRequest())
		const { data } = await storeService.removeComment(id)
		dispatch(commentRemoved(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

const getComments = (storeService) => (id) => async (dispatch) => {
	try {
		dispatch(commentsRequest())
		const { data } = await storeService.getComments(id)
		dispatch(commentsLoaded(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

export {
	getComments,
	addComment,
	editComment,
	removeComment
}