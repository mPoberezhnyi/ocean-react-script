import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from "../../actions";
import { Button } from 'react-bootstrap';

const AddToCart = ({ item, addToCart }) => {

	const onClickHandler = () => {
		addToCart(item)
	}

	return (
		<Button variant="primary" onClick={onClickHandler}>Add to cart</Button>
	)
}

const mapDispatchToProps = () => (dispatch) => {
	return bindActionCreators({
		addToCart: addToCart()
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddToCart)