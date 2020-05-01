import React, { useEffect } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import {fetchCategories} from "../../actions";
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import withStoreService from "../hoc/WithStoreService";
import {Link} from 'react-router-dom'

const Navigation = ({ categories: { categoriesList, loading }, fetchCategories }) => {

	useEffect(() => {
		fetchCategories()
	}, [fetchCategories])

	return (
		<Nav className="mr-auto">
			<Link className="nav-link" to="/">Home</Link>
			{
				!loading && categoriesList && categoriesList.length ? <NavDropdown title="Products">
					{categoriesList.map(
						({name}, index) =>
							<Link className="dropdown-item" key={index} to={`/categories/${name}`}>{name}</Link>
					)}
				</NavDropdown> : <Link className="nav-link" to="/products">Products</Link>
			}
			<Link className="nav-link" to="/blog">Blog</Link>
			<Link className="nav-link" to="/contacts">Contacts</Link>
		</Nav>
	)
}

const mapStateToProps = (categories) => {
	return categories
}

const mapDispatchToProps = (dispatch, {storeService}) => {
	return bindActionCreators({
		fetchCategories: fetchCategories(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(Navigation)