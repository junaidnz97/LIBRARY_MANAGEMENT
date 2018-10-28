import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Bookcontainer from './Bookcontainer.js';
import Bookinfo from './Bookinfo.js';
import Bookdynamic from './Bookdynamic.js';
import Listcontainer from './Listcontainer.js';
import ReviewList from './ReviewList.js';
import Header from './Header.js';  

class Book extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots : robots,
    //         //searchfield = ''
    //     }
    // }

    render() {
        return (
            <div>
                <Header />
                <Bookcontainer>
                	<Bookinfo />
                	<Bookdynamic />
                </Bookcontainer>
                <Listcontainer>
                    <ReviewList />
                </Listcontainer>
            </div>
        );

    }
}

export default Book;