import React from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../AddToCart'
import { Card } from 'react-bootstrap';

const ProductsItem = ({ item }) => {

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={item.gallery[0]} />
			<Card.Body>
				<Link to={`/clothes/${item._id}`}>
					<Card.Title>{item.name}</Card.Title>
				</Link>
				<Card.Text>{item.price.regular}</Card.Text>
				<Card.Text>{item.price.sale}</Card.Text>
				<AddToCart item={item}/>
			</Card.Body>
		</Card>
	)
}

export default ProductsItem