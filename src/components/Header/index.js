import React from 'react'
import Navigation from '../Navigation'
import CartSmall from '../CartSmall'
import UserInfoInHeader from '../UserInfoInHeader'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'

const Header = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<div className="logo">
				<Link to="/">
					Ocean
				</Link>
			</div>

			<Navigation />
			<Nav>
				<UserInfoInHeader />
				<CartSmall />
			</Nav>
		</Navbar>
	)
}

export default Header