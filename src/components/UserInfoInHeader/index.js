import React, { Fragment } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../hoc/WithStoreService'
import { NavDropdown, Button } from 'react-bootstrap';
import { logoutUser } from '../../actions'
import { Link } from 'react-router-dom'

const UserInfoInHeader = ({user, logout}) => {

	return <Fragment>
		{
			user.isAuthenticated ? <NavDropdown title={user.name || user.email}>
				<Link className="dropdown-item" to="/user">Profile</Link>
				<NavDropdown.Divider />
				<Button variant="light" block onClick={logout}>
					Logout
				</Button>
			</NavDropdown> : <Fragment>
				<Link className="nav-link" to="/login">login</Link>
				<Link className="nav-link" to="/register">register</Link>
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