import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
//import Cardlist from './Cardlist.js';
import Footer from './Footer.js'
import Historytable from './Historytable.js'
import ProfileDetails from './ProfileDetails.js'
//import Searchbox from './Searchbox,js';
import {robots} from './robots.js';

class Profile extends Component {
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
                    <ProfileDetails />
                    <Historytable />   

                </Listcontainer>
                <Footer />    
            </div>
        );

    }
}

export default Profile;
