import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import { logoutUser } from '../../actions'

const UserInfoInHeader = ({user, logout}) => {

	console.log('user: ', user, !!user.token)

	return <Fragment>
		{
			user.isAuthenticated ? <NavDropdown title={user.email}>
				<NavDropdown.Item href="/user">Profile</NavDropdown.Item>
				<NavDropdown.Divider />
				<Button variant="light" block onClick={logout}>
					Logout
				</Button>
			</NavDropdown> : <Fragment>
				<Nav.Link href="/login">login</Nav.Link>
				<Nav.Link href="/register">register</Nav.Link>
			</Fragment>
		}
	</Fragment>
}

const mapStateToProps = ({user}) => {
	return {user}
}

const mapDispatchToProps = () => (dispatch) => {
	return bindActionCreators({
		logout: logoutUser()
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoInHeader)