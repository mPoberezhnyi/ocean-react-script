import React from 'react'
import Navigation from '../Navigation'
import CartSmall from '../CartSmall'
import UserInfoInHeader from '../UserInfoInHeader'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { Logo } from './styled'

const Header = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Logo>
				<Link to="/">
					Ocean
				</Link>
			</Logo>

			<Navigation />
			<Nav>
				<UserInfoInHeader />
				<CartSmall />
			</Nav>
		</Navbar>
	)
}

export default Header