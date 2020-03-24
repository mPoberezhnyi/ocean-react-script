import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import withStoreService from '../hoc/WithStoreService'
import { fetchCategories } from '../../actions'
import { compose } from 'redux'

class CategoriesList extends Component {

	componentDidMount() {
		this.props.fetchCategories()
	}

	render() {
		const { storeService: { categories } } = this.props;
		const categoriesList = categories.map((item, index) => {
			return (
				<div key={index}>
					<Link to={`/categories/${item}`}>{ item }</Link>
				</div>
			)
		})

		return (
			<div>
				<h2>Categories list...</h2>
				{categoriesList}
			</div>
		)
	}
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
)(CategoriesList)