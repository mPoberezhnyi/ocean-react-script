import React from 'react'
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from "../../actions";
import withStoreService from "../hoc/WithStoreService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'

const AddRemoveFavorit = ({ id, favorites, removeFromFavorites, addToFavorites }) => {

	const isFavorite = favorites.list && !!favorites.list.find(item => item._id === id)

	const onClickHandler = () => {
		isFavorite ? removeFromFavorites(id) : addToFavorites(id)
	}

	return (<FontAwesomeIcon icon={isFavorite ? faHeart : faHeartEmpty}
							 color={isFavorite ? 'red' : 'gray'}
							 size="lg"
							 className={'ml-2'}
							 style={{cursor: 'pointer'}}
							 onClick={onClickHandler} />)
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
)(AddRemoveFavorit)