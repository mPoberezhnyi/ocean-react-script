import React, { useEffect } from 'react'
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import ProductsItem from '../ProductsItem'
import withStoreService from '../hoc/WithStoreService'
import { fetchProducts } from '../../actions'
import { Title, ProductsGrid } from '../../styled/global.styled'

const ProductsList = ({ products, categoryName, fetchProducts }) => {

	useEffect(() => {
		fetchProducts(categoryName)
	}, [fetchProducts, categoryName])

	if (!products) {
		return <div>fail....</div>
	}
	const productsList = products.map((item, index) => (
		<ProductsItem key={index}
					  item={item} />
	));

	return (
		<div>
			<Title>{categoryName}</Title>
			<ProductsGrid>
				{productsList}
			</ProductsGrid>
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