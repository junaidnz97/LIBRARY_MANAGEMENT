import React from 'react'
import {PageHeader} from 'react-bootstrap'
import './Header.css'

const Header = () => {


	return (
		<div className='bg-success'>
			<PageHeader>
			  Book Catalog <small> List of all books</small>
			</PageHeader>
		</div>
	);
}

export default Header;