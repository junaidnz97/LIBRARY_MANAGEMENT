import React from 'react';
import {Button} from 'react-bootstrap';

const Historybook = (props) => {
	return (
		<tr>
	        <td>{props.index + 1}</td>
	        <td>{props.book.BookName}</td>
	        <td>{props.book.BookAuthor}</td>
	        <td>{props.book.BookAuthor}</td>
	        <td>{props.book.IssueDate}</td>
	        <td>{props.book.ReturnDate}</td>
        </tr>
	);
}

export default Historybook;