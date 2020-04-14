import React, { useState } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../components/hoc/WithStoreService'
// import { useAuth } from '../hooks/auth.hook'
import { loginUser } from '../actions'

const LoginPage = ({ loginUser }) => {

	// const { login, logout, token, userId, ready } = useAuth()

	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const onSubmitHandler = (e) => {
		e.preventDefault()
		loginUser(form)
	}

	const onInputChangeHandler = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div className="auth">
			<form className="auth-form" onSubmit={onSubmitHandler}>
				<input type="email"
					   name="email"
					   className="auth-input"
					   value={form.email}
					   onChange={onInputChangeHandler}/>
				<input type="password"
					   name="password"
					   className="auth-input"
					   value={form.password}
					   onChange={onInputChangeHandler}/>
				<input type="submit"
					   className="auth-button"
					   value="Login" />
			</form>

		</div>
	)
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		loginUser: loginUser(storeService)
	}, dispatch)
}

export default compose(
	WithStoreService(),
	connect(null, mapDispatchToProps)
)(LoginPage)
