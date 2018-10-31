import React from 'react';
import {Button} from 'react-bootstrap';

const Currentbook = (props) => {
	return (
		<tr>
	        <td>1</td>
	        <td>Theory of Everything</td>
	        <td>Stephen.H</td>
	        <td>Hawk Books</td>
	        <td>22/10/2018</td>
	        <td>24/10/2018</td>
	        <td><Button bsStyle="primary">REISSUE</Button><Button bsStyle="primary">RETURN</Button></td>
        </tr>
	);
}

export default Currentbook;