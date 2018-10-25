import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import Cardlist from './Cardlist.js';
import Footer from './Footer.js'
//import Searchbox from './Searchbox,js';
import {robots} from './robots.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots : robots,
            //searchfield = ''
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Listcontainer>
                    <Cardlist robots = {this.state.robots} />
                </Listcontainer>
                <Footer />    
            </div>
        );

    }
}

export default App;
