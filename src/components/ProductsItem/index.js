import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const ProductsItem = ({ item }) => {
	const galery = item.galery.split(',');

return (
		<div className="product">
			<img src={galery[0]}
				 alt={item.name}
				 className="product-img" />
			<div className="product-name">
				<Link to={`/clothes/${item._id}`}>
					<h5>{ item.name }</h5>
				</Link>
				<p className="product-price"></p>
			</div>
		</div>
	)
}

export default ProductsItem