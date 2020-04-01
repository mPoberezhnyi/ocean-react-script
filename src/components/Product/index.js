import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import './style.css'
import {bindActionCreators, compose} from "redux";
import {fetchProduct} from "../../actions";
import withStoreService from "../hoc/WithStoreService";

const Product = ({id, product, fetchProduct}) => {

	useEffect(() => {
		fetchProduct(id)
	}, [fetchProduct, id])

	return (
		<div className="product">
			{/*<img src={product.galery.split(',')[0]} alt=""/>*/}
		</div>
	)
}

const mapStateToProps = (product) => {
	return product
}

const mapDispatchToProps = (dispatch, {storeService}, id) => {
	return bindActionCreators({
		fetchProduct: fetchProduct(storeService, id)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(Product)

