import {
	USER_INFO_IN_LOCALSTORAGE,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	ADDED_PRODUCT,
	REMOVED_PRODUCT,
	REMOVED_ALL_PRODUCTS,
	AUTH_REQUEST,
	REGISTERED_USER,
	LOGINED_USER,
	LOGOUT_USER } from '../constants/actions'

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

const fetchCategories = (storeService) => () => (dispatch) => {
	dispatch(categoriesRequest())
	storeService.getCategories()
		.then(({data}) => {
			dispatch(categoriesLoaded(data))
		})
}

//cart actions

const addToCart = () => (product) => (dispatch) => {
	dispatch({
		type: ADDED_PRODUCT,
		payload: product
	})
}

const removeFromCart = () => (product) => (dispatch) => {
	dispatch({
		type: REMOVED_PRODUCT,
		payload: product
	})
}

const removeAllFromCart = () => (product) => (dispatch) => {
	dispatch({
		type: REMOVED_ALL_PRODUCTS,
		payload: product
	})
}

//auth

const AuthRequest = (payload) => {
	return {
		type: AUTH_REQUEST,
		payload
	}
}

const userRegistred = (userInfo) => {
	return {
		type: REGISTERED_USER,
		payload: userInfo
	}
}

const userLogined = (userInfo) => {
	return {
		type: LOGINED_USER,
		payload: userInfo
	}
}

const userLogout = () => {
	return {
		type: LOGOUT_USER
	}
}

const registerUser = (storeService) => (payload) => async (dispatch) => {
	try {
		dispatch(AuthRequest(true))
		const { data } = await storeService.register(payload)
		dispatch(userRegistred(data))
	}
	catch ({message}) {
		dispatch(AuthRequest(false))
		console.log('Server error: ', message)
	}
}

const loginUser = (storeService) => (payload) => async (dispatch) => {
	try {
		dispatch(AuthRequest(true))
		const { data } = await storeService.login(payload)
		localStorage.setItem(USER_INFO_IN_LOCALSTORAGE, JSON.stringify(data))
		dispatch(userLogined(data))
	}
	catch ({message}) {
		dispatch(AuthRequest(false))
		console.log('Server error: ', message)
	}
}

const logoutUser = () => () => (dispatch) => {
	localStorage.removeItem(USER_INFO_IN_LOCALSTORAGE)
	dispatch(userLogout())
}

export {
	fetchProducts,
	fetchProduct,
	fetchCategories,
	addToCart,
	removeFromCart,
	removeAllFromCart,
	registerUser,
	loginUser,
	logoutUser
}