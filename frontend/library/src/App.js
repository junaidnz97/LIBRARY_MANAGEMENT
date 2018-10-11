import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Listcontainer from './Listcontainer.js'
import Cardlist from './Cardlist.js';
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
                <Listcontainer>
                    <Cardlist robots = {this.state.robots} />
                </Listcontainer>    
            </div>
        );

    }
}

export default App;
