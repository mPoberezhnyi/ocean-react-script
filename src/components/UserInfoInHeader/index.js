import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions'

const UserInfoInHeader = ({user, logout}) => {

	console.log('user: ', user, !!user.token)

	const links = <Fragment>
		<Link to="/login" className="header__link">
			signin
		</Link>
		<Link to="/register" className="header__link">
			signup
		</Link>
	</Fragment>

	return <Fragment>
		{
			user.isAuthenticated ? <Fragment>
				<Link to="/user"
					  className="header__link">
					{ user.email }
				</Link>
				<span className="header__link"
					  onClick={logout}>
					Logout
				</span>
			</Fragment> : links
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