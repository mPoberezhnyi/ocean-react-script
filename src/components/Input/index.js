import React, { useState } from 'react'
import './style.css'

const Input = ({type, name, value = '',  onInput}) => {

	const [input, setInput] = useState(value)
	const [focus, setFocus] = useState(false)

	const onChangeHandler = ({ target: { value } }) => {
		setInput(value)
		onInput(name, value)
	}

	const onFocusHandler = () => {
		setFocus(true)
	}

	const onBlurHandler = () => {
		if (!input.length) {
			setFocus(false)
		}
	}

	const classlist = !focus ? 'custom-fild' : 'custom-fild custom-fild--focused'

	return <div className={classlist}>
		<span className="custom-fild__label">
			{name}
		</span>
		<input className="custom-fild__input"
			   type={type}
			   name={name}
			   value={input}
			   onFocus={onFocusHandler}
			   onBlur={onBlurHandler}
			   onChange={onChangeHandler} />
	</div>
}

export default Input

