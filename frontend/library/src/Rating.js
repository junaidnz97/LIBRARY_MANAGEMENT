import React from 'react'
import './Rating.css'

const Rating = (props) => {
	console.log(this.props);
	return (
        <fieldset class="rating">
            <input type="radio" id="star5" name="rating" value="5" onClick={()=>props.clicker(5)}/><label for="star5" title="Excellent!">5 stars</label>
            <input type="radio" id="star4" name="rating" value="4" onClick={()=>props.clicker(4)} /><label for="star4" title="Good">4 stars</label>
            <input type="radio" id="star3" name="rating" value="3" onClick={()=>props.clicker(3)} /><label for="star3" title="Average">3 stars</label>
            <input type="radio" id="star2" name="rating" value="2" onClick={()=>props.clicker(2)} /><label for="star2" title="Bad">2 stars</label>
            <input type="radio" id="star1" name="rating" value="1" onClick={()=>props.clicker(1)} /><label for="star1" title="Poor">1 star</label>
        </fieldset>
    );
}

export default Rating;

  