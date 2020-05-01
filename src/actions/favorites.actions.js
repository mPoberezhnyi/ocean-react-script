import {
	FAVORITES_REQUEST,
	ADDED_TO_FAVORITES,
	REMOVED_FROM_FAVORITES,
	USER_INFO_IN_LOCALSTORAGE,
	FETCH_FAVORITES
} from "../constants/actions";

const addedToFavorites = (list) => {
	return {
		type: ADDED_TO_FAVORITES,
		payload: list
	}
}

const fetchFavorites = (list) => {
	return {
		type: FETCH_FAVORITES,
		payload: list
	}
}

const favoriteRequest = () => {
	return {
		type: FAVORITES_REQUEST
	}
}

const removedFromFavorites = (list) => {
	return {
		type: REMOVED_FROM_FAVORITES,
		payload: list
	}
}

const addToFavorites = (storeService) => (id) => async (dispatch) => {
	try {
		dispatch(favoriteRequest())
		const { token } = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
		const { data } = await storeService.addToFavorites(id, token)
		dispatch(addedToFavorites(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

const getFavorites = (storeService) => () => async (dispatch) => {
	try {
		dispatch(favoriteRequest())
		const { token } = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
		const { data } = await storeService.getFavorites(token)
		dispatch(fetchFavorites(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

const removeFromFavorites = (storeService) => (id) => async (dispatch) => {
	try {
		dispatch(favoriteRequest())
		const { token } = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
		const { data } = await storeService.deleteFromFavorites(id, token)
		dispatch(removedFromFavorites(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

export {
	addToFavorites,
	getFavorites,
	removeFromFavorites
}