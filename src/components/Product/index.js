import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import './style.css'
import {bindActionCreators, compose} from "redux";
import {fetchProduct} from "../../actions";
import withStoreService from "../hoc/WithStoreService";
import { Row, Col, Carousel, Form } from 'react-bootstrap';

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
				<h4>
					Price
					{product.price.regular}UAH
					{ product.price.sale ? `${product.price.sale}UAH` : '' }
				</h4>

				<Form>
					<Form.Group controlId="exampleForm.SelectCustom">
						<Form.Label>Sizes</Form.Label>
						<Form.Control as="select" custom>
							{
								product.availableSizes.map((item, index) => <option key={index}>{item}</option>)
							}
						</Form.Control>
					</Form.Group>

				</Form>

				<p>{product.description}</p>
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