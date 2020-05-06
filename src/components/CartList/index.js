import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { addToCart, incrementCartItem, decrementCartItem, removeAllFromCart } from '../../actions'
import { Table, Button } from 'react-bootstrap';

const CartList = ({ products, cartTotal, addToCart, incrementCartItem, decrementCartItem, removeAllFromCart }) => {

	const renderCartRow = (index, item) => {

		const minusCartCount = () => {
			decrementCartItem(item)
		}

		const plusCartCount = () => {
			incrementCartItem(item)
		}

		const removeCartItem = () => {
			removeAllFromCart(item)
		}

		return (
			<tr className="cart-row"
				key={`${item.id}_${index}`}>
				<td className="cart-cell">{index+1}</td>
				<td className="cart-cell">{item.name}</td>
				<td className="cart-cell">{item.size}</td>
				<td className="cart-cell">{item.price}</td>
				<td className="cart-cell">
					<Button variant="light" onClick={minusCartCount}>
						<FontAwesomeIcon icon={faMinus}
										 style={{cursor: 'pointer'}}/>
					</Button>
					{item.count} pcs
					<Button variant="light" onClick={plusCartCount}>
						<FontAwesomeIcon icon={faPlus}
										 style={{cursor: 'pointer'}}/>
					</Button>
				</td>
				<td className="cart-cell">{item.total}</td>
				<td className="cart-cell">
					<Button variant="danger" onClick={removeCartItem}>
						<FontAwesomeIcon icon={faTimes}
										 style={{cursor: 'pointer'}}/>
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
							<th>Size</th>
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
		incrementCartItem: incrementCartItem(),
		decrementCartItem: decrementCartItem(),
		removeAllFromCart: removeAllFromCart()
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)