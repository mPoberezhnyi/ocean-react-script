import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import withStoreService from '../hoc/WithStoreService'
import { addComment, editComment } from '../../actions'
import { Spinner, Image } from 'react-bootstrap'
import { AddCommentRow, CommentImgWarap } from '../../styled/comment.styled'

const AddComment = ({user, addComment, editComment, parentId, productId, comment, comments: { loading }}) => {

	const commentText = comment && comment.text

	const [newComment, setNewComment] = useState(commentText || '')

	const userId = user && user.userId
	const userName = user && user.name

	const onChangeHandler = ({target: { value }}) => {
		setNewComment(value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		comment ? editComment({
			...comment,
			text: newComment,
		}) :
		addComment({
			userId: userId || 0,
			name: userName || 'Anonym',
			text: newComment,
			productId,
			parentId: parentId || 0
		})
		setNewComment('')
	}

	return (<Form onSubmit={onSubmitHandler}>
		<Form.Row>
			<CommentImgWarap>
				<Image src="https://nogivruki.ua/wp-content/uploads/2018/08/default-user-image-300x300.png"
					   style={{maxWidth: '100%'}}
					   roundedCircle />
			</CommentImgWarap>
			<AddCommentRow>
				<Form.Group style={{width: '100%'}}>
					<Form.Control as="textarea"
								  placeholder="Enter your comment..."
								  rows="5"
								  value={newComment}
								  onChange={onChangeHandler}/>
				</Form.Group>
				<Button variant="primary" type="submit" disabled={!newComment.length}>
					{
						loading ? <Spinner
							as="span"
							animation="border"
							size="sm"
							role="status"
							aria-hidden="true"
						/> : 'Send'
					}
				</Button>
			</AddCommentRow>
		</Form.Row>
	</Form>)
}

const mapStateToProps = ({user, comments}) => {
	return {
		user,
		comments
	}
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		addComment: addComment(storeService),
		editComment: editComment(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(AddComment)