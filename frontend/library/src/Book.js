import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Bookcontainer from './Bookcontainer.js';
import Bookinfo from './Bookinfo.js';
import Bookdynamic from './Bookdynamic.js';
import Listcontainer from './Listcontainer.js';
import Footer from './Footer.js';  

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
                <Navbar />
                <Bookcontainer>
                	<Bookinfo />
                	<Bookdynamic />
                </Bookcontainer>
                <Listcontainer>

                </Listcontainer>
                <Footer />
            </div>
        );

    }
}

export default Book;