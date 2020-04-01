import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from "../../actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const AddToCart = ({ item, addToCart }) => {

	const onClickHandler = () => {
		addToCart(item)
	}

	return (
		<div className="addToCart"
			 onClick={onClickHandler}>
			<FontAwesomeIcon icon={faCartPlus} />
		</div>
	)
}

const mapDispatchToProps = () => (dispatch) => {
	return bindActionCreators({
		addToCart: addToCart()
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddToCart)