import {
	ADDED_PRODUCT,
	DECREMENT_CART_ITEM,
	INCREMENT_CART_ITEM,
	REMOVED_ALL_PRODUCTS,
	USER_CART_IN_LOCALSTORAGE,
} from "../constants/actions";

const updateCartItems = (cartItems, item, idx) => {

	if (item.count < 1) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1)
		];
	}

	if (idx === -1) {
		return [
			...cartItems,
			item
		];
	}

	return [
		...cartItems.slice(0, idx),
		item,
		...cartItems.slice(idx + 1)
	];
};

const updateCartItem = (oldItem, newItem) => ({
	...oldItem,
	count: parseFloat(oldItem.count) + parseFloat(newItem.count),
	total: parseFloat(oldItem.total) + parseFloat(newItem.total)
})

const updateCart = (state, product) => {

	const orderIndex = state.orderList.findIndex(item => item.id === product.id && item.size === product.size)

	let newProduct = {...product}

	if (orderIndex !== -1) {
		const oldProduct = state.orderList[orderIndex]
		newProduct = updateCartItem(oldProduct, newProduct)
	}

	const newCart = {
		orderList: updateCartItems(state.orderList, newProduct, orderIndex),
		cartTotal: state.cartTotal + parseFloat(product.total),
		cartCount: state.cartCount + parseFloat(product.count)
	}

	localStorage.removeItem(USER_CART_IN_LOCALSTORAGE)
	localStorage.setItem(USER_CART_IN_LOCALSTORAGE, JSON.stringify(newCart))

	return newCart
}

let cart = JSON.parse(localStorage.getItem(USER_CART_IN_LOCALSTORAGE));
const initialState = cart ?
	{ ...cart } : {
		orderList: [],
		cartTotal: 0,
		cartCount: 0
	};

const ShoppingCart = (state = initialState, action) => {
	if (state === undefined) {
		return {
			orderList: [],
			cartTotal: 0,
			cartCount: 0
		}
	}

	switch (action.type) {

		case ADDED_PRODUCT:
			return updateCart(state, action.payload)

		case INCREMENT_CART_ITEM:
			return updateCart(state, {
				...action.payload,
				count: 1,
				total: action.payload.price
			});

		case DECREMENT_CART_ITEM:
			return updateCart(state, {
				...action.payload,
				count: -1,
				total: -action.payload.price
			});

		case REMOVED_ALL_PRODUCTS:
			return updateCart(state, {
				...action.payload,
				count: -action.payload.count,
				total: -(action.payload.count * action.payload.price)
			});

		default:
			return state;
	}
}

export default ShoppingCart