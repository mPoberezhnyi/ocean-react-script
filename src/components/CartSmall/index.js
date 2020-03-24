import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const CartSmall = () => {
	return (
		<div className="small-cart">
			<FontAwesomeIcon icon={faShoppingCart} />
			<div className="small-cart-count">0</div>
		</div>
	)
}

export default CartSmall