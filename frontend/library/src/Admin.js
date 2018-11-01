import React, { Component } from 'react';
import './Admin.css'
import ApproveTable from './ApproveTable'
import AddBook from './AddBook'
import {Link} from 'react-router-dom';

import Footer from './Footer.js'
import UsersTable from './UsersTable'
import Listcontainer from './Listcontainer';
import ViewBooks from './ViewBooks';



class Admin extends Component {
    constructor() {
        super();
    }

    render() {
        return (
                <div>
                    
                <div class="s-layout">
                <div class="s-layout__sidebar">
                <a class="s-sidebar__trigger" href="#0">
                    <i class="fa fa-bars"></i>
                </a>

                <nav class="s-sidebar__nav">
                    <ul>
                    <li>
                        <a class="s-sidebar__nav-link" href="#0">
                        
                        <Link to='/'>
                            <img className="sricity" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/IIIT_Sri_City_Logo.png/220px-IIIT_Sri_City_Logo.png"  />
                            {' '}  Project B-02
                        </Link>
                        </a>
                        </li>  
                     <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-thumbs-up"></i><em>View Requests</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-users"></i><em>View Users</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-book"></i><em>Add a Book</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-edit"></i><em>Edit Book records</em>
                        </a>
                        </li>
                        
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-money"></i><em>Pay Fine</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-key"></i><em>Change Password</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-sign-out"></i><em>Logout</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <em>Library@IIITS</em>
                        </a>
                        </li>
                    </ul>
                </nav>
                </div>
                
                <Listcontainer>
                    {/*ApproveTable*/}    
                    {/*<UsersTable/>*/}
                    {/*<AddBook/>*/}
                    {/*<ViewBooks/>*/}
                    

                </Listcontainer>
                </div>
                </div>
    );
 }
}

export default Admin;
