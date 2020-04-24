import { combineReducers } from 'redux'
import UpdateProductsList from './products-list'
import ProductsItem from './products-item'
import UpdateCategoriesList from './categories-list'
import shoppingCart from './shopping-cart'
import AuthUser from './auth'

export default combineReducers({
	products: UpdateProductsList,
	product: ProductsItem,
	categories: UpdateCategoriesList,
	shoppingCart: shoppingCart,
	user: AuthUser
})