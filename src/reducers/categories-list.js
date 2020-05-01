import {FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS} from "../constants/actions";

const UpdateCategoriesList = (state, action) => {
	if (state === undefined) {
		return {
			categoriesList: [],
			loading: true
		}
	}

	switch (action.type) {
		case FETCH_CATEGORIES_REQUEST:
			return {
				categoriesList: [],
				loading: true
			};

		case FETCH_CATEGORIES_SUCCESS:
			return {
				categoriesList: action.payload,
				loading: false
			};

		default:
			return state;
	}
}

export default UpdateCategoriesList