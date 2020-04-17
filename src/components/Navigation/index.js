import React, { useEffect } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import './style.css'
import {fetchCategories} from "../../actions";
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import withStoreService from "../hoc/WithStoreService";

const Navigation = ({ categories, fetchCategories }) => {

	useEffect(() => {
		fetchCategories()
	}, [fetchCategories])

	let dropdown = (<span></span>)

	if (categories && categories.length) {
		dropdown = <NavDropdown title="Products">
			{categories.map(
				({name}, index) =>
					<NavDropdown.Item key={index} href={`/categories/${name}`}>{name}</NavDropdown.Item>
			)}
		</NavDropdown>
	}

	return (
		<Nav className="mr-auto">
			<Nav.Link href="/">Home</Nav.Link>
			{ dropdown }
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