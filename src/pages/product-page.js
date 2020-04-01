import React from 'react'
import Product from '../components/Product'

const ProductPage = ({id}) => {

	return (
		<div>
			<h1>Product page...</h1>
			<Product id={id}/>
		</div>
	)
}

export default ProductPage

