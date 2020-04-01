import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const CartSmall = ({ cartCount }) => {
	return (
		<Link to="/cart">
			<div className="small-cart">
				<FontAwesomeIcon icon={faShoppingCart} />
				<div className="small-cart-count">{ cartCount }</div>
			</div>
		</Link>
	)
}

const mapStateToProps = ({shoppingCart: { cartCount }}) => {
	return {cartCount}
}

export default connect(mapStateToProps)(CartSmall)