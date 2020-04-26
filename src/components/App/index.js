import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import withStoreService from "../hoc/WithStoreService";
import Header from '../Header'
import Footer from '../Footer'
import Breadcrumbs from '../Breadcrumbs'
import ProductsList from '../ProductsList'
import Product from '../../pages/product-page'
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom'
import {
	HomePage,
	CartPage,
	RegisterPage,
	LoginPage,
	AboutPage,
	ContactsPage,
	FaqPage,
	NewsPage,
	ProfilePage } from '../../pages'
import './style.css'
import { bindActionCreators, compose } from "redux";
import { getProfileFetch } from "../../actions";

const App = ({user, getProfileFetch}) => {

	useEffect(() => {
		getProfileFetch()
	}, [getProfileFetch])

	return (
		<Fragment>
			<div className="content">
				<Header/>
				<Breadcrumbs/>
				<Container className="main-content">
					<Switch>
						<Route path="/" component={ HomePage } exact />
						<Route path="/categories/:categoryName"
							   render={({match}) => {
								   const { categoryName } = match.params;
								   return <ProductsList categoryName={categoryName} />
							   }} />
						<Route path="/clothes/:id"
							   render={({match}) => {
								   const { id } = match.params;
								   return <Product id={id} />
							   }} />
						<Route path="/cart" exact component={ CartPage }/>
						<Route path="/about" exact component={ AboutPage }/>
						<Route path="/contacts" exact component={ ContactsPage }/>
						<Route path="/faq" exact component={ FaqPage }/>
						<Route path="/news" exact component={ NewsPage }/>
						<Route path="/user" exact>
							{user.isAuthenticated ? <ProfilePage /> : <Redirect to="/login" />}
						</Route>
						<Route path="/register" >
							{user.isAuthenticated ?  <Redirect to="/" /> : <RegisterPage /> }
						</Route>
						<Route path="/login">
							{user.isAuthenticated ?  <Redirect to="/" /> : <LoginPage /> }
						</Route>
					</Switch>
				</Container>
			</div>
			<Footer/>
		</Fragment>
	)
}

const mapStateToProps = ({user}) => {
	return {
		user
	}
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		getProfileFetch: getProfileFetch(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(App)