import React from 'react';
import {Button} from 'react-bootstrap';

const RequestedBooks = (props) => {
	return (
		<tr>
	        <td>{props.index + 1}</td>
	        <td>{props.book.BookName}</td>
	        <td>{props.book.BookAuthor}</td>
	        <td>{props.book.FirstName + props.book.LastName}</td>
	        <td>{props.book.UserName}</td>
	        <td>{props.book.Timestamp}</td>
	        <td>
		        <Button bsSize="small" bsStyle="primary">Issue
		        </Button>
		        <Button bsSize="small" bsStyle="primary">Reject
		        </Button>
	        </td>
        </tr>
	);
}

export default RequestedBooks;