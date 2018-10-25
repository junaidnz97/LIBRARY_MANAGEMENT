import React from 'react';

const Review = (props) => {
	
	return (
		<div className="br3 pa3 ma3 dib grow bw2 shadow-5" style={{width:'200px'}}>
			<img alt="robots" src={`https://robohash.org/${props.id}?50x50`} />
			<div>
				<h2> {props.name} </h2>
				<p> {props.email} </p>
			</div>
		</div>
	);
}

export default Review;
