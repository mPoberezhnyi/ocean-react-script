import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../AddToCart'
import './style.css'

const ProductsItem = ({ item }) => {

	const galery = item.galery.split(',');

	const [isHoverProduct, setIsHoverProduct] = useState(false)

	const addProductToCart = isHoverProduct ? <div className="product-add">
		<AddToCart item={item}/>
	</div> : <div></div>

	const onMouseEnterHandler = () => {
		setIsHoverProduct(true)
	}

	const onMouseLeaveHandler = () => {
		setIsHoverProduct(false)
	}

	return (
		<div className="product"
			 onMouseEnter={ onMouseEnterHandler }
			 onMouseLeave={ onMouseLeaveHandler }>
			<div className="product-img-wrap">
				{ addProductToCart }
				<img src={galery[0]}
					 alt={item.name}
					 className="product-img" />
			</div>
			<div className="product-name">
				<Link to={`/clothes/${item._id}`}>
					<h5>{ item.name }</h5>
				</Link>
				<p className="product-price">{item.price}</p>
			</div>
		</div>
	)
}

export default ProductsItem