import React, { Fragment } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../hoc/WithStoreService'
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import { logoutUser } from '../../actions'

const UserInfoInHeader = ({user, logout}) => {

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

const mapDispatchToProps = () => (dispatch, {storeService}) => {
	return bindActionCreators({
		logout: logoutUser(storeService)
	}, dispatch)
}

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(UserInfoInHeader)