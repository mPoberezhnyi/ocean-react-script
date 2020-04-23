import React from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../AddToCart'
import { Card } from 'react-bootstrap';
import ProductPrice from "../ProductPrice";

const ProductsItem = ({ item }) => {

	return (
		<Card style={{ width: '18rem', margin: '0 16px' }}>
			<Card.Img variant="top"
					  style={{ height: '420px', objectFit: 'cover' }}
					  src={item.gallery[0]} />
			<Card.Body>
				<Link to={`/clothes/${item._id}`}>
					<Card.Title>{item.name}</Card.Title>
				</Link>
				<ProductPrice price={item.price}/>
				<AddToCart item={item}/>
			</Card.Body>
		</Card>
	)
}

export default ProductsItem