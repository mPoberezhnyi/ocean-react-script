import React, { useEffect } from 'react'
import Comment from '../Comment'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../hoc/WithStoreService'
import {getComments} from '../../actions'

const CommentsList = ({productId, getComments, comments: { list, loading }}) => {

	useEffect(() => {
		getComments(productId)
	}, [getComments, productId])

	return <div className="mt-3">
		{
			list.length ?
				list.map((item, index) => {
					return <Comment key={`${item.id}_${index}`}
									item={item}
									productId={productId} />
				}) :
				<p>'No comments....'</p>
		}
	</div>
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
)(CommentsList)