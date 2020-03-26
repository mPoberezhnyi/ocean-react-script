import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import withStoreService from '../hoc/WithStoreService'
import { fetchCategories } from '../../actions'
import { compose } from 'redux'

const CategoriesList = ({ categories, fetchCategories }) => {

	useEffect(() => {
		fetchCategories()
		}, [fetchCategories])


	if (!categories || !categories.length) {
		return <div>fail....</div>
	}

	const categoriesList = categories.map((item, index) => {
		return (
			<div key={index}>
				<Link to={`/categories/${item.name}`}>{ item.name }</Link>
			</div>
		)
	})

	return (
		<div>
			<h2>Categories list...</h2>
			{categoriesList}
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