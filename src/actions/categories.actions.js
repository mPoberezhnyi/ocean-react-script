import {FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS} from "../constants/actions";

const categoriesRequest = () => {
	return {
		type: FETCH_CATEGORIES_REQUEST
	}
}

const categoriesLoaded = (newCategories) => {
	return {
		type: FETCH_CATEGORIES_SUCCESS,
		payload: newCategories
	}
}

const fetchCategories = (storeService) => () => (dispatch) => {
	dispatch(categoriesRequest())
	storeService.getCategories()
		.then(({data}) => {
			dispatch(categoriesLoaded(data))
		})
}

export {
	fetchCategories
}