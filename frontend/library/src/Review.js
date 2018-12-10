import React from 'react';
// import './Review.js';
import './Review.css'

const convert = (num) => {
	let i=0;
	let result = '';
	for(i=0; i<num; i++){
		result+='★';
	}
	return result;
}

const Review = (props) => {
	console.log(props)
	return (
		

		<div className="br3 pa3 ma3 dib bw2 shadow-5" style={{width:'100%'}}>
			<div className="contain">
				<h3>{props.review.FirstName + " " +props.review.LastName}</h3>
				<p> {props.review.Review} </p>
			</div>
			<div className="card__">
                <span className="card__stars--active">{convert(props.review.Rating)}</span>
                <span className="card__stars--inactive">{convert(5 - props.review.Rating)}</span>
            </div>
		</div>
	);
}

export default Review;
