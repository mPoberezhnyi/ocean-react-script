import React, { useEffect }  from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import withStoreService from '../hoc/WithStoreService'
import { fetchProducts } from '../../actions'
import { compose } from 'redux'

const ProductsList = ({ products, categoryName, fetchProducts }) => {

	useEffect(() => {
		fetchProducts()
	}, [])

	if (!products) {
		return <div>fail....</div>
	}
	const productsList = products.map((item, index) => {
		return <p key={index}>{ item.name }</p>
	});

	return (
		<div>
			<h2>Products list...</h2>
			Category name: {categoryName}
			{productsList}
		</div>
	)
}

const mapStateToProps = (products) => {
	return products
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		fetchProducts: fetchProducts(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProductsList)