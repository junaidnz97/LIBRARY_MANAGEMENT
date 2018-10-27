import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Header from './Header.js'
import {PageHeader, Button, Table} from 'react-bootstrap'
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
                    <div>
                <h2>Previous books in Possession </h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Date of issue</th>
                        <th>Date of return</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                            </tr>
                        <tr>
                        <td>3</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                           </tr>
                    </tbody>
                </Table>
            </div>

                </Listcontainer>
                <Footer />    
            </div>
        );

    }
}

export default Profile;
