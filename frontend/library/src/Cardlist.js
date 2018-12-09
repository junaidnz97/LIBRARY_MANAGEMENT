import React from 'react';
import Cardcomp from './Card.js';
import {Link} from 'react-router-dom';
import {Row} from 'reactstrap'

const Cardlist = ({books}) => {

	const Cardarray = books.map((book, i) =>{
		return (
			<Link to={{ pathname: '/fe/book', state: { book: book} }}>
				<Cardcomp 
					key={book.id} 
					bookdesc={book} 
				/>
			</Link>
		);
	});



	return (
		<Row>
			{Cardarray}
		</Row>
	);
}

export default Cardlist;