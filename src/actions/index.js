import { USER_INFO_IN_LOCALSTORAGE } from '../constants/actions'

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

const productReqsted = () => {
	return {
		type: 'FETCH_PRODUCT_REQUEST'
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

const fetchProducts = (storeService) => (name) => (dispatch) => {
	dispatch(productsReqsted())
	storeService.getCategory(name)
		.then(({data}) => {
			dispatch(productsLoaded(data))
		})
}

const fetchProduct = (storeService) => (id) => (dispatch) => {
	dispatch(productReqsted())
	storeService.getProduct(id)
		.then(({data}) => {
			dispatch(productLoaded(data))
		})
}

const fetchCategories = (storeService) => () => (dispatch) => {
	dispatch(categoriesReqsted())
	storeService.getCategories()
		.then(({data}) => {
			dispatch(categoriesLoaded(data))
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

//auth

const userRegistred = (userInfo) => {
	return {
		type: 'REGISTERED_USER',
		payload: userInfo
	}
}

const userLogined = (userInfo) => {
	return {
		type: 'LOGINED_USER',
		payload: userInfo
	}
}

const userLogout = () => {
	return {
		type: 'LOGOUT_USER'
	}
}

const registerUser = (storeService) => (payload) => async (dispatch) => {
	try {
		const { data } = await storeService.register(payload)
		dispatch(userRegistred(data))
	}
	catch ({message}) {
		console.log('Server error: ', message)
	}
}

const loginUser = (storeService) => (payload) => async (dispatch) => {
	try {
		const { data } = await storeService.login(payload)
		localStorage.setItem(USER_INFO_IN_LOCALSTORAGE, JSON.stringify(data))
		dispatch(userLogined(data))
	}
	catch ({message}) {
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