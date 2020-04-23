const defaultState = {
	name: '',
	gallery: [],
	categories: [],
	price: {
		regular: 0,
		sale: 0
	},
	description: "",
	availableSizes: []
}

const ProductsItem = (state, action) => {
	if (state === undefined) {
		return defaultState
	}

	switch (action.type) {
		case 'FETCH_PRODUCT_REQUEST':
			return defaultState;

		case 'FETCH_PRODUCT_SUCCESS':
			return action.payload;

		default:
			return state;
	}
}

export default ProductsItem