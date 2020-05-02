import {ADDED_PRODUCT, DECREMENT_CART_ITEM, INCREMENT_CART_ITEM, REMOVED_ALL_PRODUCTS} from "../constants/actions";

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

export {
	addToCart,
	incrementCartItem,
	decrementCartItem,
	removeAllFromCart
}