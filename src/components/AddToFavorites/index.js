import React from 'react'
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from "../../actions";
import withStoreService from "../hoc/WithStoreService";
import { Button } from 'react-bootstrap';

const AddToFavorites = ({ id, favorites, removeFromFavorites, addToFavorites }) => {

	const isFavorite = favorites.list && !!favorites.list.find(item => item._id === id)

	const onClickHandler = () => {
		isFavorite ? removeFromFavorites(id) : addToFavorites(id)
	}

	return (<Button variant="primary"
					type="button"
					onClick={onClickHandler}>
		{
			isFavorite ? 'Remove from favorites' : 'Add to favorites'
		}
	</Button>)
}

const mapStatetToProps = ({favorites}) => {
	return {
		favorites
	}
}

const mapDispatchToProps = () => (dispatch, {storeService}) => {
	return bindActionCreators({
		addToFavorites: addToFavorites(storeService),
		removeFromFavorites: removeFromFavorites(storeService)
	}, dispatch)
}

export default compose(
	withStoreService(),
	connect(mapStatetToProps, mapDispatchToProps)
)(AddToFavorites)