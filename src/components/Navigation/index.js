import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navigation = () => {
	return (
		<ul className="navigation">
			<li className="navigation-item">
				<Link to="/">Home</Link>
			</li>
			<li className="navigation-item">
				<Link to="/categories">Categories</Link>
			</li>
			<li className="navigation-item">
				<Link to="/blog">Blog</Link>
			</li>
			<li className="navigation-item">
				<Link to="/contacts">Contacts</Link>
			</li>
		</ul>
	)
}

export default Navigation