const UpdateCategoriesList = (state, action) => {
	if (state === undefined) {
		return []
	}

	switch (action.type) {
		case 'FETCH_CATEGORIES_REQUEST':
			return [];

		case 'FETCH_CATEGORIES_SUCCESS':
			return action.payload;

		default:
			return state;
	}
}

export default UpdateCategoriesList