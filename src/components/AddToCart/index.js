import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from "../../actions";
import { Button, Form } from 'react-bootstrap';
import AddToFavorites from "../AddToFavorites";

const AddToCart = (
	{
	   item: {
			_id,
			name,
			price: {
				regular,
				sale
			},
		   	availableSizes
		},
		count = 1,
		addToCart
	}) => {

	const price = sale || regular

	const [cartItem, setCartItem] = useState({
		id: _id,
		name,
		size: availableSizes[0],
		count,
		price,
		total: price * count
	})

	useEffect(() => {
		setCartItem({
			id: _id,
			name,
			size: availableSizes[0],
			count: count,
			price,
			total: price * count
		})
	}, [_id, name, availableSizes, price, count])

	const onSubmitHandler = (e) => {
		e.preventDefault()
		addToCart(cartItem)
	}

	const sizeOnChangeHandler = ({target: { value }}) => {
		setCartItem({
			...cartItem,
			size: value
		})
	}

	const countOnChangeHandler = ({target: { value }}) => {

		const count = parseFloat(value)

		setCartItem({
			...cartItem,
			count,
			total: count * cartItem.price
		})
	}

	return (
		<Form onSubmit={onSubmitHandler}>
			<Form.Group>
				<Form.Label>Sizes</Form.Label>
				<Form.Control as="select"
							  name="size"
							  onChange={sizeOnChangeHandler}>
					{
						availableSizes.map((item, index) => <option key={index}>
								{ item }
							</option>)
					}
				</Form.Control>
			</Form.Group>

			<Form.Group>
				<Form.Label>Count</Form.Label>
				<Form.Control
					type="number"
					name="count"
					min="1"
					value={cartItem.count}
					onChange={countOnChangeHandler}
				/>
			</Form.Group>

			<Form.Row>
				<Button variant="primary"
						type="submit">
					Add to cart
				</Button>
				<AddToFavorites id={cartItem.id}/>
			</Form.Row>
		</Form>
	)
}

const mapDispatchToProps = () => (dispatch) => {
	return bindActionCreators({
		addToCart: addToCart()
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddToCart)