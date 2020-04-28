import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { clearMessage } from "../../actions";

const Notification = ({message: {type, text}, clearMessage}) => {

	useEffect(() => {
		setTimeout(() => {
			clearMessage()
		}, 4000)
	}, [text, clearMessage])

	if (text.length) {
		return (<Alert variant={type}>
			{text}
		</Alert>)
	}

	return (<span></span>)
}

const mapStateToProps = (message) => {
	return message
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		clearMessage: clearMessage()
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)