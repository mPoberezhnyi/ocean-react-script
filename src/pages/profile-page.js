import React from 'react'
import { compose } from 'redux'

const ProfilePage = ({user}) => {
	console.log(user)
	return <h1>Profile page...</h1>
}

const mapStateToProps = (user) => {
	return user
}

export default compose(mapStateToProps)(ProfilePage)