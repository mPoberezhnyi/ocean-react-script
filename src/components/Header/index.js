import React from 'react'
import Navigation from '../Navigation'
import CartSmall from '../CartSmall'
import UserInfoInHeader from '../UserInfoInHeader'
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
				<div className="header__right-panel">
					<UserInfoInHeader />
					<CartSmall />
				</div>
			</header>
		</div>
	)
}

export default Header