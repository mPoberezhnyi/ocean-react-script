import React from 'react'
import WithStoreService from '../hoc/WithStoreService'

const CategoryList = ({storeService: { categories }}) => {
	return (
		<React.Fragment>
			<div>Category list...</div>
			{
				categories.map((item, index) => {
					return <p key={index}>
						{item}
					</p>
				})
			}
		</React.Fragment>

	)
}

export default WithStoreService()(CategoryList)