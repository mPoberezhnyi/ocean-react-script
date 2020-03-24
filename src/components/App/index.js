import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Breadcrumbs from '../Breadcrumbs'
import ProductsList from '../ProductsList'

import { Switch, Route } from 'react-router-dom'
import { HomePage, CategoriesPage } from '../../pages'

export default function App() {

	return (
		<React.Fragment>
			<div className="content">
				<Header/>
				<Breadcrumbs/>
				<div className="container main-content">
					<Switch>
						<Route path="/" component={ HomePage } exact />
						<Route path="/categories/:categoryName"
							   render={({match}) => {
								   const { categoryName } = match.params;
								   return <ProductsList categoryName={categoryName} />
							   }} />
						<Route path="/categories" exact component={ CategoriesPage }/>

					</Switch>
				</div>
			</div>
			<Footer/>
		</React.Fragment>
	)
}