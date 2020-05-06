import styled from 'styled-components'

export const CommentHeaderRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const CommentImgWarap = styled.div`
	width: 60px;
	
	img {
		max-width: 100%	
	}
`

export const CommentName = styled.h3`
	font-size: 1.5rem;
	margin: 0 0 0 2rem
`

export const CommentRow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 1rem;
`

export const CommentText = styled.div`
	width: 100%
`

export const AddCommentRow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: calc(100% - 60px);
	padding-left: 2rem;
`