import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Navbar from './Navbar.js'
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
//import Cardlist from './Cardlist.js';
import Footer from './Footer.js'
import Historytable from './Historytable.js'
import ProfileDetails from './ProfileDetails.js'
import {PageHeader} from 'react-bootstrap'


class Payfine extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    }
    render() {
      return (
        <div>
                <div className='bg-success'>
                    <PageHeader>
                    Pay Fine <small>Total Pending in INR: 20</small>
                    </PageHeader>
                </div>
                <Listcontainer>
                <div>
                <h2>History of Books <Button bsStyle="primary" className="pull-right">Visit the librarian to pay your dues</Button> </h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Date of issue</th>
                        <th>Date of return</th>
                        <th>Pending Fine in INR</th>
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
                        <td>10</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td>10</td>    </tr>
                        <tr>
                        <td>3</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td>15</td>    </tr>
                    </tbody>
                </Table>
            </div>   

                </Listcontainer>
                <br/><br/><br/><br/><br/>
        </div>
        
        

      );
    }
  }
  

  export default Payfine;
