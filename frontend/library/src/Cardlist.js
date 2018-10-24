import React from 'react';
import Card from './Card.js';

const Cardlist = ({robots}) => {

	const Cardarray = robots.map((user, i) =>{
		return (
			<Card 
				key={robots[i].id} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email} 
			/>
		);
	});



	return (
		<div>
			{Cardarray}
		</div>
	);
}

export default Cardlist;