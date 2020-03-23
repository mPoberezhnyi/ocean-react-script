import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
			return <p key={index}>{ item }</p>
		})
		const { categoryName } = this.props;

		return (
			<div>
				<h2>Categories list...</h2>
				Category name: {categoryName}
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