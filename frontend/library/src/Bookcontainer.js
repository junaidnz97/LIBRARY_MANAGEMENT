import React from 'react'
import './Bookcontainer.css'

const Bookcontainer = (props) => {

	return (
		<div className="Bookcontainer" >
			{props.children}
		</div>

	);
}

export default Bookcontainer