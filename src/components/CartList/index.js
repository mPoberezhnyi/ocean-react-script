import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { addToCart, removeFromCart, removeAllFromCart } from '../../actions'
import { Table, Button } from 'react-bootstrap';

const CartList = ({ products, cartTotal, addToCart, removeFromCart, removeAllFromCart }) => {

	console.log(products)

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
					<Button variant="light" onClick={minusCartCount}>
						<FontAwesomeIcon icon={faMinus} />
					</Button>
					{item.count} pcs
					<Button variant="light" onClick={plusCartCount}>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				</td>
				<td className="cart-cell">{item.total}</td>
				<td className="cart-cell">
					<Button variant="danger" onClick={removeCartItem}>
						<FontAwesomeIcon icon={faTimes} />
					</Button>
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
				cartList.length ? <Table bordered>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Price</th>
							<th>Count</th>
							<th>Total price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cartList}
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>{cartTotal}</td>
							<td></td>
						</tr>
					</tbody>
				</Table> : <h2>No items...</h2>
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