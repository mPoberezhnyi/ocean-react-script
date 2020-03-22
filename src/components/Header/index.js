import React from 'react'
import Navigation from '../Navigation'
import CartSmall from '../CartSmall'
import './style.css'

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				logo
			</div>
			<Navigation />
			<CartSmall />
		</header>
	)
}

export default Header