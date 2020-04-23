import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import Footer from '../Footer'
import Breadcrumbs from '../Breadcrumbs'
import ProductsList from '../ProductsList'
import Product from '../../pages/product-page'
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'
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

const App = ({user}) => {

	const links = user.isAuthenticated ? <Fragment>
			<Route path="/user" component={ ProfilePage }/>
		</Fragment> : <Fragment>
			<Route path="/register" component={ RegisterPage }/>
			<Route path="/login" component={ LoginPage }/>
		</Fragment>

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
						{links}
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

export default connect(mapStateToProps)(App)