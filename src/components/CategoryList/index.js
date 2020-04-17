import React, { useEffect } from 'react'
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import withStoreService from '../hoc/WithStoreService'
import { fetchCategories } from '../../actions'
import CategoriesItem from "../CategoriesItem";
import './style.css'

const CategoriesList = ({ categories, fetchCategories }) => {

	useEffect(() => {
		fetchCategories()
		}, [fetchCategories])


	if (!categories || !categories.length) {
		return <div>fail....</div>
	}

	const categoriesList = categories.map((item, index) => {
		return (
			<CategoriesItem key={index} item={item} />
		)
	})

	return (
		<div>
			<h2>Categories list...</h2>
			<div className="category-list">
				{categoriesList}
			</div>
		</div>
	)
}

const mapStateToProps = (categories) => {
	return categories
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		fetchCategories: fetchCategories(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(CategoriesList)

// export default Categories()(CategoriesList)