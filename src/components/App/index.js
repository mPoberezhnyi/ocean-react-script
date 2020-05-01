import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import withStoreService from "../hoc/WithStoreService";
import Header from '../Header'
import Footer from '../Footer'
import Breadcrumbs from '../Breadcrumbs'
import ProductsList from '../ProductsList'
import Notification from '../Notification'
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
import { getProfileFetch, getFavorites } from "../../actions";

const App = ({user, getProfileFetch, getFavorites}) => {

	useEffect(() => {
		getProfileFetch()
		getFavorites()
	}, [getProfileFetch, getFavorites])

	return (
		<Fragment>
			<div className="content">
				<Header/>
				<Breadcrumbs/>
				<Notification />
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
		getProfileFetch: getProfileFetch(storeService),
		getFavorites: getFavorites(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(App)