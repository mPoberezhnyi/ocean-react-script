import React, { useState } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../components/hoc/WithStoreService'
import { registerUser } from '../actions'
import { Button, Spinner } from 'react-bootstrap'

const RegisterPage = ({ registerUser, user: { loading } }) => {

	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const onSubmitHandler = (e) => {
		e.preventDefault()
		registerUser(form)
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
				<Button variant="primary"
						block
						disabled={loading}
						type="submit">
					{
						loading ? <Spinner
							as="span"
							animation="border"
							size="sm"
							role="status"
							aria-hidden="true"
						/> : 'Register'
					}
				</Button>
			</form>

		</div>
	)
}

const mapStateToProps = (user) => {
	return user
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		registerUser: registerUser(storeService)
	}, dispatch)
}

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(RegisterPage)
