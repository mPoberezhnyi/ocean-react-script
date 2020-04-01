import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { addToCart, removeFromCart, removeAllFromCart } from '../../actions'
import './style.css'

const CartList = ({ products, cartTotal, addToCart, removeFromCart, removeAllFromCart }) => {

	const renderCartRow = (index, item ) => {

		const minusCartCount = () => {
			removeFromCart(item)
		}

		const plusCartCount = () => {
			addToCart(item)
		}

		const removeCartItem = () => {
			removeAllFromCart(item)
		}

		return (
			<tr className="cart-row"
				key={item.id}>
				<td className="cart-cell">{item.index}</td>
				<td className="cart-cell">{item.title}</td>
				<td className="cart-cell">{item.price}</td>
				<td className="cart-cell">
					<FontAwesomeIcon icon={faMinus}
									 onClick={minusCartCount} />
					{item.count} pcs
					<FontAwesomeIcon icon={faPlus}
									 onClick={plusCartCount} />
				</td>
				<td className="cart-cell">{item.total}</td>
				<td className="cart-cell">
					<FontAwesomeIcon icon={faTimes}
									 onClick={removeCartItem} />
				</td>
			</tr>
		)
	}

	const cartList = products.map((item, index) => {
		return (
			<React.Fragment key={item.id}>
				{renderCartRow(index, item)}
			</React.Fragment>
		)
	})

	return (
		<React.Fragment>
			{
				cartList.length ? <table className="cart-list">
					<thead>
					<tr className="cart-row">
						<td className="cart-cell">#</td>
						<td className="cart-cell">Title</td>
						<td className="cart-cell">Price</td>
						<td className="cart-cell">Count</td>
						<td className="cart-cell">Total price</td>
						<td className="cart-cell">Remove</td>
					</tr>
					</thead>
					<tbody>
					{cartList}
					</tbody>
					<tfoot>
					<tr className="cart-row">
						<td className="cart-cell"></td>
						<td className="cart-cell"></td>
						<td className="cart-cell"></td>
						<td className="cart-cell"></td>
						<td className="cart-cell">{cartTotal}</td>
						<td className="cart-cell"></td>
					</tr>
					</tfoot>
				</table> : <h2>No items...</h2>
			}
		</React.Fragment>
	)
}

const mapStateToProps = ({shoppingCart: { orderList, cartTotal }}) => {
	return {
		products: orderList,
		cartTotal
	}
}

const mapDispatchToProps = () => (dispatch) => {
	return bindActionCreators({
		addToCart: addToCart(),
		removeFromCart: removeFromCart(),
		removeAllFromCart: removeAllFromCart()
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)