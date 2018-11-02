import React from 'react';

const Fine = (props) => {
	return (
		<tr>
	        <td>{props.index + 1}</td>
	        <td>{props.fine.BookName}</td>
	        <td>{props.fine.BookAuthor}</td>
	        <td>22/10/2018</td>
	        <td>24/10/2018</td>
	        <td>10</td>
        </tr>
	);
}

export default Fine;