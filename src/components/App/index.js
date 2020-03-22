import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Breadcrumbs from '../Breadcrumbs'
import ProductsList from '../ProductsList'

import { Switch, Route } from 'react-router-dom'
import { HomePage, CategoriesPage } from '../../pages'

export default function App() {

	return (
		<div>
			<h1>Create project</h1>
			<Header/>
			<Breadcrumbs/>
			<Switch>
				<Route path="/" component={ HomePage } exact />
				<Route path="/categories/:categoryName"
					   render={({match}) => {
						   console.log('ff', match);
						   const { categoryName } = match.params;
						   return <ProductsList categoryName={categoryName} />
					   }} />
				<Route path="/categories" exact component={ CategoriesPage }/>

			</Switch>
			<Footer/>
		</div>
	)
}