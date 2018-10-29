import React from 'react'
import {PageHeader} from 'react-bootstrap'

import './Footer.css'


const Footer = (props) => {

	return (
		<div className='page-footer'>
				<div className='bg-success' >
		<PageHeader style={{ marginTop: "10px"}}>
			Library@IIITS<br /><small>720 GnanMarg,SriCity</small>
			
		</PageHeader>
	</div>
	</div>
	
	);
}

export default Footer;