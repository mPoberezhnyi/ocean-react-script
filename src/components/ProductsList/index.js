import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductsItem from '../ProductsItem'

import withStoreService from '../hoc/WithStoreService'
import { fetchProducts } from '../../actions'
import { compose } from 'redux'

import './style.css'

const ProductsList = ({ products, categoryName, fetchProducts }) => {

	useEffect(() => {
		fetchProducts()
	}, [fetchProducts])

	if (!products) {
		return <div>fail....</div>
	}
	const productsList = products.map((item, index) => {
		return <ProductsItem key={index}
							 item={item} />
	});

	return (
		<div>
			<h2>Products list...</h2>
			Category name: {categoryName}
			<div className="products-list">
				{productsList}
			</div>
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