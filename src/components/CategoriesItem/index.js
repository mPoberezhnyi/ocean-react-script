import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const CategoriesItem = ({item: {name, image}}) => {
	return (
		<div className="category-wrap">
			<Link to={`categories/${name}`} className="category">
				<img src={image}
					 alt={name}
					 className="category-img" />
				<div className="category-name">
					<span>{ name }</span>
				</div>
			</Link>
		</div>
	)
}

export default CategoriesItem