import React, { useState } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from "../../actions";
import { Button, Form } from 'react-bootstrap';

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

	console.log(regular, sale)

	const price = sale || regular

	const [cartItem, setCartItem] = useState({
		id: _id,
		name,
		size: availableSizes[0],
		count,
		price,
		total: price * count
	})

	const onSubmitHandler = (e) => {
		e.preventDefault()
		console.log(cartItem)
		// addToCart(cartItem)
	}

	const onChangeHandler = ({target: { name, value }}) => {
		console.log(name, value)
		setCartItem({
			...cartItem,
			[name]: value
		})
	}

	return (
		<Form onSubmit={onSubmitHandler}>
			<Form.Group>
				<Form.Label>Sizes</Form.Label>
				<Form.Control as="select"
							  name="size"
							  onChange={onChangeHandler}>
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
					onChange={onChangeHandler}
				/>
			</Form.Group>

			<Button variant="primary"
					type="submit">
				Add to cart
			</Button>
		</Form>
	)
}

const mapDispatchToProps = () => (dispatch) => {
	return bindActionCreators({
		addToCart: addToCart()
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddToCart)