import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators, compose} from "redux";
import {fetchProduct} from "../../actions";
import AddToCart from '../AddToCart'
import ProductPrice from '../ProductPrice'
import withStoreService from "../hoc/WithStoreService";
import { Row, Col, Carousel } from 'react-bootstrap';
import styled from 'styled-components'

const Description = styled.p`
	display: inline-block;
	margin-top: 2rem;
`

const Product = ({id, product, fetchProduct}) => {

	useEffect(() => {
		fetchProduct(id)
	}, [fetchProduct, id])

	if (!product) {
		return <div>
			wait...
		</div>
	}

	return (
		<Row>
			<Col>
				<Carousel>
					{
						product.gallery.map((item, index) => <Carousel.Item key={`gallery_${product.name}_${index}`}>
							<img
								className="d-block w-100"
								src={item}
								alt={`${product.name} ${index}`}
							/>
						</Carousel.Item>)
					}

				</Carousel>
			</Col>
			<Col>
				<h2>{product.name}</h2>
				<h4>Price:</h4>
				<ProductPrice price={product.price}/>
				<AddToCart item={product}/>
				<Description>{product.description}</Description>
			</Col>
		</Row>
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