import React from 'react';
// import './Review.js';
import './Review.css'

const Review = (props) => {
	
	return (
		<div className="br3 pa3 ma3 dib bw2 shadow-5" style={{width:'100%'}}>
			<div className="contain">
				<h3>Name</h3>
				<p> Review </p>
			</div>
			<div className="card__">
                <span>3.0 </span>
                <span className="card__stars--active">★★★</span>
                <span className="card__stars--inactive">★★</span>
            </div>
		</div>
	);
}

export default Review;
