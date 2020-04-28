import {
	USER_INFO_IN_LOCALSTORAGE,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	ADDED_PRODUCT,
	REMOVED_ALL_PRODUCTS,
	AUTH_REQUEST,
	REGISTERED_USER,
	LOGINED_USER,
	LOGOUT_USER, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, SET_MESSAGE, CLEAR_MESSAGE
} from '../constants/actions'

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

const incrementCartItem = () => (product) => (dispatch) => {
	dispatch({
		type: INCREMENT_CART_ITEM,
		payload: product
	})
}

const decrementCartItem = () => (product) => (dispatch) => {
	dispatch({
		type: DECREMENT_CART_ITEM,
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
		const { data: { email, message } } = await storeService.register(payload)
		dispatch(userRegistred({email}))
		dispatch(setMessage({
			type: 'success',
			text: message
		}))
	}
	catch ({message}) {
		dispatch(setMessage({
			type: 'danger',
			text: message
		}))
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

const getProfileFetch = (storeService) => () => async (dispatch) => {
	try {
		dispatch(AuthRequest(true))
		const userDate = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));

		if (userDate) {
			const {data: { isUser } } = await storeService.getProfile(userDate.token)

			if (!isUser) {
				const { data: { token } } = await storeService.updateToken(userDate.refreshToken)
				const newUserData = {
					...userDate,
					token
				}
				localStorage.setItem(USER_INFO_IN_LOCALSTORAGE, JSON.stringify(newUserData))
				dispatch(userLogined(newUserData))
			}
		}
		dispatch(AuthRequest(false))

	} catch ({message}) {
		localStorage.removeItem(USER_INFO_IN_LOCALSTORAGE)
		dispatch(userLogout())
		console.log('Server error: ', message)
	}
}

const logoutUser = (storeService) => () => async (dispatch) => {
	try {
		const { refreshToken } = JSON.parse(localStorage.getItem(USER_INFO_IN_LOCALSTORAGE));
		await storeService.logoutUser(refreshToken)
		localStorage.removeItem(USER_INFO_IN_LOCALSTORAGE)
		dispatch(userLogout())
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

//message
const setMessage = (payload) => {
	return {
		type: SET_MESSAGE,
		payload
	}
}

const clearMessage = () => () => (dispatch) => {
	dispatch({
		type: CLEAR_MESSAGE
	})
}

export {
	fetchProducts,
	fetchProduct,
	fetchCategories,
	addToCart,
	incrementCartItem,
	decrementCartItem,
	removeAllFromCart,
	registerUser,
	loginUser,
	getProfileFetch,
	logoutUser,
	clearMessage
}