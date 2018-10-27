import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Listcontainer from './Listcontainer.js'
import Footer from './Footer.js'
import Sidenav from './Sidenav.js'



class Admin extends Component {
    constructor() {
        super();
       }

    render() {
        return (
              <div>
                <Navbar />
                <Sidenav />
                
                <Listcontainer>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Listcontainer>
                <Footer />    
                </div>
        );

    }
}

export default Admin;
