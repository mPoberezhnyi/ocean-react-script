import React, { useEffect, useCallback } from 'react'
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import withStoreService from '../../components/hoc/WithStoreService'
import { fetchCategories } from '../../actions'

const Categories = ({ categories, fetchCategories }) => (CategoriesList) => {

	return (props) => {
		// useEffect(() => {
		// 	fetchCategories()
		// }, [fetchCategories])

		return (
			<CategoriesList categories={categories} {...props}/>
		)
	}
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
)(Categories)