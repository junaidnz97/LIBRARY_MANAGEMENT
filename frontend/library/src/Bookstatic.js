import React from 'react';
import './Bookstatic.css';

const Bookstatic = (props) => {

  return (
          <div class="card1">
              <img class="card__image" src="https://placeimg.com/250/300/animals" width="240px" height="300px"/>      
              <div class="card__content">
                <h3>Book Name</h3>
                <p>
                    <strong>Author(s):</strong> Aditya
                </p>
                <p>
                    <strong>Publisher(s):</strong> Junaid
                </p>
                <p>
                    <strong>Edition:</strong> 3
                </p>
                <p>
                    <strong>Total Books:</strong> 8
                </p>
                <p>Description</p>
                <div class="card__rating">
                  <span>3.0 </span>
                  <span class="card__stars--active">★★★</span>
                  <span class="card__stars--inactive">★★</span>
                </div>
              </div>
          </div>
  );
}



export default Bookstatic;