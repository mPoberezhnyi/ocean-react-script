import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS
} from "../constants/actions";

const productsRequest = () => {
	return {
		type: FETCH_PRODUCTS_REQUEST
	}
}

const productsLoaded = (newProducts) => {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: newProducts
	}
}

const productRequest = () => {
	return {
		type: FETCH_PRODUCT_REQUEST
	}
}

const productLoaded = (newProduct) => {
	return {
		type: FETCH_PRODUCT_SUCCESS,
		payload: newProduct
	}
}

const fetchProducts = (storeService) => (name) => (dispatch) => {
	dispatch(productsRequest())
	storeService.getCategory(name)
		.then(({data}) => {
			dispatch(productsLoaded(data))
		})
}

const fetchProduct = (storeService) => (id) => (dispatch) => {
	dispatch(productRequest())
	storeService.getProduct(id)
		.then(({data}) => {
			dispatch(productLoaded(data))
		})
}

export {
	fetchProducts,
	fetchProduct
}