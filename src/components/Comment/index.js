import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Image, Button } from 'react-bootstrap'
import AddComment from '../AddComment'
import { removeComment } from "../../actions";
import WithStoreService from '../hoc/WithStoreService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import dayjs from 'dayjs'
import { CommentHeaderRow, CommentImgWarap, CommentName, CommentRow, CommentText } from '../../styled/comment.styled'
import {bindActionCreators, compose} from "redux";

const Comment = ({user, item, productId, removeComment}) => {

	const [isReplyComment, setIsReplyComment] = useState(false)
	const [isEditComment, setIsEditComment] = useState(false)

	useEffect(() => {
		setIsEditComment(false)
		setIsReplyComment(false)
	}, [item])

	const remove = () => {
		removeComment(item._id)
	}

	const edit = () => {
		setIsEditComment(true)
	}

	const reply = () => {
		setIsReplyComment(true)
	}

	return <div className="mt-3">
		{
			isEditComment ? <AddComment parentId={item._id}
										productId={productId}
										comment={item}/> :
				<div>
					<CommentHeaderRow>
						<CommentHeaderRow>
							<CommentImgWarap>
								<Image src="https://nogivruki.ua/wp-content/uploads/2018/08/default-user-image-300x300.png"
									   style={{maxWidth: '100%'}}
									   roundedCircle />
							</CommentImgWarap>
							<CommentName>{item.name}</CommentName>
						</CommentHeaderRow>

						<div>
							{
								item.modifiedDate > item.date ?
									<span>modified {dayjs(item.modifiedDate).format('m:HH DD.MM.YYYY')}</span> :
									<span>{dayjs(item.date).format('m:HH DD.MM.YYYY')}</span>
							}
							{
								user.userId === item.userId ?
									<Fragment>
										<FontAwesomeIcon icon={faEdit}
														 size="lg"
														 style={{cursor: 'pointer'}}
														 className={'ml-3'}
														 onClick={edit}/>
										<FontAwesomeIcon icon={faTrashAlt}
														 size="lg"
														 style={{cursor: 'pointer'}}
														 className={'ml-3'}
														 onClick={remove}/>

									</Fragment> :
									<span></span>
							}
						</div>
					</CommentHeaderRow>
					<CommentRow>
						<CommentText>
							<p>{item.text}</p>
						</CommentText>
						<Button variant="link"
								className="mt-1"
								onClick={reply}>
							Reply
						</Button>
					</CommentRow>
				</div>
		}
		{
			isReplyComment ? <div className="ml-5">
				<AddComment parentId={item._id}
							productId={productId}/>
			</div> : <span></span>
		}
	</div>
}

const mapStateToProps = ({user}) => {
	return {
		user
	}
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		removeComment: removeComment(storeService)
	}, dispatch)
}

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(Comment)