import React from 'react';
import Card from './Card.js';
import {Link} from 'react-router-dom';

const Cardlist = ({books}) => {

	const Cardarray = books.map((book, i) =>{
		return (
			<Link to={{ pathname: '/book', state: { book: book} }}>
				<Card 
					key={book.id} 
					id={book.id} 
					name={book.BookName} 
					desc={book.BookDescription} 
				/>
			</Link>
		);
	});



	return (
		<div>
			{Cardarray}
		</div>
	);
}

export default Cardlist;