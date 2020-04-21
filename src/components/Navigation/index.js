import React, { Fragment, useEffect } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import './style.css'
import {fetchCategories} from "../../actions";
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import withStoreService from "../hoc/WithStoreService";

const Navigation = ({ categories: { categoriesList, loading }, fetchCategories }) => {

	useEffect(() => {
		fetchCategories()
	}, [fetchCategories])

	let dropdown = (<span></span>)

	if (!loading && categoriesList && categoriesList.length) {
		dropdown = <Fragment>
			{categoriesList.map(
				({name}, index) =>
					<NavDropdown.Item key={index} href={`/categories/${name}`}>{name}</NavDropdown.Item>
			)}
		</Fragment>
	}

	return (
		<Nav className="mr-auto">
			<Nav.Link href="/">Home</Nav.Link>
			<NavDropdown title="Products">
				{ dropdown }
			</NavDropdown>
			<Nav.Link href="/blog">Blog</Nav.Link>
			<Nav.Link href="/contacts">Contacts</Nav.Link>
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