import React, { useState } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import WithStoreService from '../components/hoc/WithStoreService'
import { loginUser } from '../actions'
import { Form, Button, Spinner } from 'react-bootstrap'

const LoginPage = ({ loginUser, user: { loading, user } }) => {

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
			<Form className="auth-form"
				  onSubmit={onSubmitHandler}>
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
						placeholder="Enter password"
						name="password"
						value={form.password}
						onChange={onInputChangeHandler}
					/>
					<Form.Control.Feedback type="invalid">
						Please choose a username.
					</Form.Control.Feedback>
				</Form.Group>
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
						/> : 'Login'
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
		loginUser: loginUser(storeService)
	}, dispatch)
}

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(LoginPage)
