import React, { Component } from 'react';
import Listcontainer from './Listcontainer.js';
import Review from './Review.js';
import * as axios from 'axios';

class ReviewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews : []
        }
    }

    componentDidMount() {
        let getData = async () => {            
              let reviews = await axios({
              method: 'get',
              url: '/review',
              params: {
                bookId: this.props.BookId
              }
            });
            if(reviews.data.output){
                this.props.history.push('/login');
            }
            else{
                this.setState({reviews: reviews.data.details});
            }
        }
        getData();
    }


    render() {

        const reviews = this.state.reviews;
        const Reviewarray = reviews.map((review, i) =>{
            return (
                <Review 
                    key = {review.UserId}
                    review = {review}
                    index = {i}
                />
            );
        });

        return (
            <div>
                {console.log(this.props.BookId)}
                <h3 style={{textAlign:"center"}}> Reviews & Ratings </h3>
                {Reviewarray}
            </div>
        );
    }
}



export default ReviewList;