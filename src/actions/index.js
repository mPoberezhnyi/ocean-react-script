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

const productLoaded = (newProduct) => {
	return {
		type: 'FETCH_PRODUCT_SUCCESS',
		payload: newProduct
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

const fetchProduct = (storeService, id) => () => (dispatch) => {
	storeService.getProduct(id)
		.then(data => {
			dispatch(productLoaded(data.data))
		})
}

const fetchCategories = (storeService) => () => (dispatch) => {
	dispatch(categoriesReqsted())
	storeService.getCategories()
		.then(data => {
			dispatch(categoriesLoaded(data.data))
		})
}

//cart actions

const addToCart = () => (product) => (dispatch) => {
	dispatch({
		type: 'ADDED_PRODUCT',
		payload: product
	})
}

const removeFromCart = () => (product) => (dispatch) => {
	dispatch({
		type: 'REMOVED_PRODUCT',
		payload: product
	})
}

const removeAllFromCart = () => (product) => (dispatch) => {
	dispatch({
		type: 'REMOVED_ALL_PRODUCTS',
		payload: product
	})
}

export {
	fetchProducts,
	fetchProduct,
	fetchCategories,
	addToCart,
	removeFromCart,
	removeAllFromCart
}