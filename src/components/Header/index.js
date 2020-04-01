import React from 'react'
import Navigation from '../Navigation'
import CartSmall from '../CartSmall'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
	return (
		<div className="container">
			<header className="header">
				<Link to="/">
					<div className="logo">
						Ocean
					</div>
				</Link>

				<Navigation />
				<CartSmall />
			</header>
		</div>
	)
}

export default Header