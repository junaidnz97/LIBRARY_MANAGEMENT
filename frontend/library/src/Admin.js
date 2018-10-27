import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Header from './Header.js'
import {PageHeader} from 'react-bootstrap'
import Listcontainer from './Listcontainer.js'
//import Cardlist from './Cardlist.js';
import Footer from './Footer.js'
import Historytable from './Historytable.js'
import ProfileDetails from './ProfileDetails.js'
//import Searchbox from './Searchbox,js';
import {robots} from './robots.js';
import './Admin.css'



class Admin extends Component {
    constructor() {
        super();
        
        
    }

    render() {
        return (
              <div>
                <div id="sidebar-wrapper">

                <Navbar />
                <ul class="sidebar-nav nav-pills nav-stacked" id="menu">

                  <li class="active">
                    <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> Dashboard</a>
                    
                  </li>
                  <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-users fa-stack-1x "></i></span>View Users</a></li>

                  <li>
                  <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-book fa-stack-1x "></i></span>Book records</a> 
                  </li>
                  <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-edit fa-stack-1x "></i></span>Edit book records</a></li>
                  <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-trash fa-stack-1x "></i></span>Delete book records</a></li>
                  <li>
                    <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-money fa-stack-1x "></i></span>Pay Fine</a>
                  </li>
                  <li>
                    <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-youtube-play fa-stack-1x "></i></span>About</a>
                  </li>
                  <li>
                    <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-key fa-stack-1x "></i></span>Change Password</a>
                  </li>
                  <li>
                    <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-server fa-stack-1x "></i></span>Contact</a>
                  </li>
                </ul>
              </div>
                <Listcontainer>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Listcontainer>
                <Footer />    
                </div>
        );

    }
}

export default Admin;
