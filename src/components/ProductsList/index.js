import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import withStoreService from '../hoc/WithStoreService'
import { fetchProducts } from '../../actions'
import { compose } from 'redux'

class ProductsList extends Component {

	componentDidMount() {
		this.props.fetchProducts()
	}

	render() {

		const { storeService: { products } } = this.props;
		const productsList = products.map((item, index) => {
			return <p key={index}>{ item.name }</p>
		})
		const { categoryName } = this.props;

		return (
			<div>
				<h2>Products list...</h2>
				Category name: {categoryName}
				{productsList}
			</div>
		)
	}
}

const mapStateToProps = (products) => {
	return products
}

const mapDispatchToProps = (dispatch, storeService) => {
	return bindActionCreators({
		fetchProducts: fetchProducts(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProductsList)