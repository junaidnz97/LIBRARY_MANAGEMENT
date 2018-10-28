import React from 'react';
import Card from './Card.js';
import {Link} from 'react-router-dom';

const Cardlist = ({robots}) => {

	const Cardarray = robots.map((user, i) =>{
		return (
			<Link to='/book'>
				<Card 
					key={robots[i].id} 
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email} 
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