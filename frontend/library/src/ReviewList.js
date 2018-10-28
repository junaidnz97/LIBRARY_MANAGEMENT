import React, { Component } from 'react';
import Listcontainer from './Listcontainer.js';
import Review from './Review.js';

class ReviewList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots : robots,
    //         //searchfield = ''
    //     }
    // }



    render() {
        // const Reviewarray = robots.map((user, i) =>{
        //     return (
        //         <Review 
        //             // key={robots[i].id} 
        //             // id={robots[i].id} 
        //             // name={robots[i].name} 
        //             // email={robots[i].email} 
        //         />
        //     );
        // });

        return (
            <div>
                <h3 style={{textAlign:"center"}}> Reviews & Ratings </h3>
                <Review />
                <Review />
                <Review />
            </div>
        );
    }
}



export default ReviewList;