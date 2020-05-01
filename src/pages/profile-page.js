import React, { useEffect } from 'react'
import { getUser, getFavorites } from "../actions";
import { bindActionCreators, compose } from 'redux'
import {connect} from "react-redux";
import WithStoreService from "../components/hoc/WithStoreService";
import ProductsItem from '../components/ProductsItem'
import { ProductsGrid } from '../globalStyled'
import { Spinner } from 'react-bootstrap'

const ProfilePage = ({user, favorites, getUser, getFavorites}) => {

	useEffect(() => {
		getUser()
		getFavorites()
	}, [getUser, getFavorites])

	if (!user || !favorites) {
		return <h1>User page...</h1>
	}

	// const favoritesProducts = () => {
	// 	if(favorites && favorites.length) {
	// 		return <ProductsGrid>
	// 			{
	// 				favorites.list.map((item, index) => {
	// 					return <ProductsItem key={index}
	// 										 item={item} />
	// 				})
	// 			}
	// 		</ProductsGrid>
	// 	}
	//
	// 	return <p>No products</p>
	// }


	return (<div>
		<h1>Your name: {user.name}</h1>
		<h3>Your email: {user.email}</h3>
		<h3>Your favorites products</h3>
		{
			favorites.loading ? <Spinner animation="border" variant="primary" /> : <ProductsGrid>
				{
					favorites.list.map((item, index) => {
						return <ProductsItem key={index}
											 item={item} />
					})
				}
			</ProductsGrid>
		}
	</div>)
}

const mapStateToProps = ({user, favorites}) => {
	return {
		user,
		favorites
	}
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		getUser: getUser(storeService),
		getFavorites: getFavorites(storeService)
	}, dispatch)
}

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProfilePage)