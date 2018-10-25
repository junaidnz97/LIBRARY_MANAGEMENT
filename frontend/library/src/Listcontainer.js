import React from 'react'
import './Listcontainer.css'

const Listcontainer = (props) => {

	return (
		<div className="Listcontainer shadow-5" >
			{props.children}
		</div>

	);
}

export default Listcontainer;