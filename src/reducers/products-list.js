const UpdateProductsList = (state, action) => {
	if (state === undefined) {
		return []
	}

	switch (action.type) {
		case 'FETCH_PRODUCTS_REQUEST':
			return [];

		case 'FETCH_PRODUCTS_SUCCESS':
			return action.payload;

		case 'FETCH_PRODUCT_SUCCESS':
			return action.payload;

		default:
			return state;
	}
}

export default UpdateProductsList