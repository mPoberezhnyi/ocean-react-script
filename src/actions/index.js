const productsReqsted = () => {
	return {
		type: 'FETCH_PRODUCTS_REQUEST'
	}
}

const productsLoaded = (newProducts) => {
	return {
		type: 'FETCH_PRODUCTS_SUCCESS',
		payload: newProducts
	}
}

const categoriesReqsted = () => {
	return {
		type: 'FETCH_CATEGORIES_REQUEST'
	}
}

const categoriesLoaded = (newCategories) => {
	return {
		type: 'FETCH_CATEGORIES_SUCCESS',
		payload: newCategories
	}
}

const fetchProducts = (storeService) => () => (dispatch) => {
	dispatch(productsReqsted())
	storeService.getProducts()
		.then(data => {
			dispatch(productsLoaded(data.data))
		})
}

const fetchCategories = (storeService) => () => (dispatch) => {
	dispatch(categoriesReqsted())
	storeService.getCategories()
		.then(data => {
			dispatch(categoriesLoaded(data.data))
		})
}

export {
	fetchProducts,
	fetchCategories
}