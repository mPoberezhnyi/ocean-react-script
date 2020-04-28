import React, { useState } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../components/hoc/WithStoreService'
import { registerUser } from '../actions'
import { Form, Button, Spinner } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const initialState = {
	name: '',
	email: '',
	password: '',
	rePassword: ''
}

const RegisterPage = ({ registerUser, user: { loading, user } }) => {

	const [form, setForm] = useState(initialState)

	if (user && user.email) {
		return <Redirect to="/login" />
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		registerUser({
			name: form.name,
			email: form.email,
			password: form.password
		})
	}

	const onInputChangeHandler = ({target: { name, value }}) => {
		setForm({
			...form,
			[name]: value
		})
	}

	return (
		<div className="auth">
			<Form className="auth-form"
				  onSubmit={onSubmitHandler}>
				<Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Please enter username"
						name="name"
						value={form.name}
						onChange={onInputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						value={form.email}
						onChange={onInputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						className={form.password === form.rePassword ? 'form-control' : 'form-control is-invalid'}
						placeholder="Enter password"
						name="password"
						value={form.password}
						onChange={onInputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Repreat password</Form.Label>
					<Form.Control
						type="password"
						className={form.password === form.rePassword ? 'form-control' : 'form-control is-invalid'}
						placeholder="Repeat password"
						name="rePassword"
						value={form.rePassword}
						onChange={onInputChangeHandler}
					/>
					<Form.Control.Feedback type="invalid">
						Passwords do not match
					</Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary"
						block
						disabled={form.password !== form.rePassword}
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
			</Form>

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
