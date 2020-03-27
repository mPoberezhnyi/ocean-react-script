import { combineReducers } from 'redux'
import UpdateProductsList from './products-list'
import UpdateCategoriesList from './categories-list'

export default combineReducers({
	products: UpdateProductsList,
	categories: UpdateCategoriesList
})