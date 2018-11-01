import React, { Component } from 'react';
import './Admin.css'
import ApproveTable from './ApproveTable'
import AddBook from './AddBook'
import {Link, Route, Switch} from 'react-router-dom';

import Footer from './Footer.js'
import UsersTable from './UsersTable'
import Listcontainer from './Listcontainer';
import ViewBooks from './ViewBooks';

const Structure = ({ Comp, hist, loc }) => (
	<React.Fragment>
        <div class="s-layout">
                <div class="s-layout__sidebar">
                <a class="s-sidebar__trigger" href="#0">
                    <i class="fa fa-bars"></i>
                </a>

                <nav class="s-sidebar__nav">
                    <ul>
                    <li>
                        
                        <Link to='/admin' className="s-sidebar__nav-link">
                            <img className="sricity" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/IIIT_Sri_City_Logo.png/220px-IIIT_Sri_City_Logo.png"  />
                            {' '}  Project B-02
                        </Link>
                        
                        </li>  
                        <li>
                        <Link to='/admin' className="s-sidebar__nav-link">
                          <i class="fa fa-thumbs-up"></i><em>View Requests</em>                        
                        </Link>
                            
                        </li>
                        <li>
                        <Link to='/admin/viewusers' className="s-sidebar__nav-link">
                          <i class="fa fa-users"></i><em>View Users</em>
                        </Link>
                        <Link to='/admin/addbook' className="s-sidebar__nav-link">
                            <i class="fa fa-book"></i><em>Add a Book</em>                        
                        </Link>
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
                    <Comp history={hist} location={loc}/>
                    {/*ApproveTable*/}    
                    {/*<UsersTable/>*/}
                    {/*<AddBook/>*/}
                    {/*<ViewBooks/>*/}
                    

                </Listcontainer>
                </div>
	</React.Fragment>
)


const Admin = () => {
        return (
                <Switch>
                    <Route exact path="/admin" component={p => <Structure Comp={ApproveTable} hist={p.history}/>} />
                    <Route path="/admin/approve" component={p => <Structure Comp={ApproveTable} hist={p.history}/>} />
                    <Route path="/admin/viewusers" component={p => <Structure Comp={UsersTable} hist={p.history}/>} />
                    <Route path="/admin/addbook" component={p => <Structure Comp={AddBook} hist={p.history}/>} />
                    <Route path="/admin/viewbooks" component={p => <Structure Comp={ViewBooks} hist={p.history}/>} /> 
                </Switch>
    );
}

export default Admin;
