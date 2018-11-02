import React from 'react';
import './Bookstatic.css';

const Bookstatic = (props) => {

  return (
          <div class="card1">
              <img class="card__image" src={`${props.book.Img_url_l}`} width="240px" height="300px"/>      
              <div class="card__content">
                <h3>{props.book.BookName}</h3>
                <p>
                    <strong>Author(s):</strong> {props.book.BookAuthor}
                </p>
                <p>
                    <strong>Publisher:</strong> {props.book.Publisher}
                </p>
                <p>
                    <strong>Edition:</strong> {props.book.BookEdition}
                </p>
                <p>
                    <strong>Total Books:</strong> {props.book.TotalQuantity}
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