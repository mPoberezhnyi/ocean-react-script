import React from 'react'
import Product from '../components/Product'
import AddComment from '../components/AddComment'
import CommentsList from '../components/CommentsList'
import { Title } from '../styled/global.styled'

const ProductPage = ({id}) => {

	return (
		<div>
			<Product id={id}/>
			<Title>Reviews</Title>
			<div className="mt-5">
				<AddComment productId={id}/>
				<CommentsList productId={id}/>
			</div>
		</div>
	)
}

export default ProductPage

