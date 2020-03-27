import React from 'react'
import { connect } from 'react-redux';
import './style.css'

const Product = ({id, products}) => {

	const choseProduct = products.find(item => item._id === id)

	return (
		<div className="product">
			<img src={choseProduct.galery.split(',')[0]} alt=""/>
		</div>
	)
}

const mapStateToProps = (products) => {
	return products
}

export default connect(mapStateToProps)(Product)

