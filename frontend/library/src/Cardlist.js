import React from 'react';
import Card from './Card.js';
import {Link} from 'react-router-dom';

const Cardlist = ({books}) => {

	const Cardarray = books.map((user, i) =>{
		return (
			<Link to='/book'>
				<Card 
					key={books[i].id} 
					id={books[i].id} 
					name={books[i].BookName} 
					desc={books[i].BookDescription} 
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