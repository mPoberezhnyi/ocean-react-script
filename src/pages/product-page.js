import React, { useEffect } from 'react'
import Product from '../components/Product'
import AddComment from '../components/AddComment'
import CommentsList from '../components/CommentsList'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../components/hoc/WithStoreService'
import {getComments} from '../actions'
import { Title } from '../styled/global.styled'

const ProductPage = ({id, getComments, comments: { list }}) => {

	useEffect(() => {
		getComments(id)
	}, [getComments, id])

	return (
		<div>
			<Product id={id}/>
			<Title>Reviews</Title>
			<div className="mt-5">
				<AddComment productId={id}/>
				<CommentsList list={list} productId={id}/>
			</div>
		</div>
	)
}

const mapStateToProps = ({comments}) => {
	return {
		comments
	}
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		getComments: getComments(storeService)
	}, dispatch)
}

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProductPage)

