import { combineReducers } from 'redux'
import UpdateProductsList from './products-list'
import UpdateCategoriesList from './categories-list'
import shoppingCart from './shoppingCart'
import AuthUser from './auth'

export default combineReducers({
	products: UpdateProductsList,
	categories: UpdateCategoriesList,
	shoppingCart: shoppingCart,
	user: AuthUser
})