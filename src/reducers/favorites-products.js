import {
	FAVORITES_REQUEST,
	ADDED_TO_FAVORITES,
	REMOVED_FROM_FAVORITES,
	FETCH_FAVORITES
} from "../constants/actions";

const FavoritesProducts = (state, action) => {
	if (state === undefined) {
		return {
			list: [],
			loading: true
		}
	}

	switch (action.type) {
		case FAVORITES_REQUEST:
			return {
				list: [],
				loading: true
			};

		case ADDED_TO_FAVORITES:
			return {
				list: action.payload,
				loading: false
			};

		case FETCH_FAVORITES:
			return {
				list: action.payload,
				loading: false
			};

		case REMOVED_FROM_FAVORITES:
			return {
				list: action.payload,
				loading: false
			};

		default:
			return state;
	}
}

export default FavoritesProducts