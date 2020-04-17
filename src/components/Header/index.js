import React from 'react'
import Navigation from '../Navigation'
import CartSmall from '../CartSmall'
import UserInfoInHeader from '../UserInfoInHeader'
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'

const Header = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="/">
				<div className="logo">Ocean</div>
			</Navbar.Brand>
			<Navigation />
			<Nav>
				<UserInfoInHeader />
				<CartSmall />
			</Nav>
		</Navbar>
	)
}

export default Header