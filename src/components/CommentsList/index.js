import React from 'react'
import Comment from '../Comment'


const CommentsList = ({productId, list}) => {

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

export default CommentsList