import React from 'react'
import {PageHeader} from 'react-bootstrap'
import './Header.css'

const Header = () => {


	return (
		<div className='bg-success'>
			<PageHeader>
			  Welcome to your Profile <small> Paras Dahiya</small>
			</PageHeader>
		</div>
	);
}

export default Header;