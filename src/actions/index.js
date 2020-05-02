import { fetchProducts, fetchProduct } from './products.actions'
import { fetchCategories } from './categories.actions'
import { addToCart, incrementCartItem, decrementCartItem, removeAllFromCart } from './cart.actions'
import { registerUser, loginUser, getProfileFetch, getUser, logoutUser } from './auth.actions'
import { clearMessage } from './messages.actions'
import { addToFavorites, getFavorites, removeFromFavorites } from './favorites.actions'

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
	getUser,
	logoutUser,
	clearMessage,
	addToFavorites,
	getFavorites,
	removeFromFavorites
}