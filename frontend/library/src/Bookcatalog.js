import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import Cardlist from './Cardlist.js';
//import Searchbox from './Searchbox,js';
import {robots} from './robots.js';

class Bookcatalog extends Component {
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
                <Header />
                <Listcontainer>
                    <Cardlist robots = {this.state.robots} />
                </Listcontainer>
            </div>
        );

    }
}

export default Bookcatalog;
