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


class Donate extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    }
    render() {
      return (
        <div>
                <Navbar />
                <div className='bg-success'>
                    <PageHeader>
                    Donate Books <small> Enter details of the book you want to donate</small>
                    </PageHeader>
                </div>
                <Listcontainer>
                <Form horizontal>
        <br/><br/>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Enter details of the book
                </Col>
                <Col sm={10}>
                <FormControl type="text" placeholder="Eg. Theory of Everything" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Enter Author's name
                </Col>
                <Col sm={10}>
                <FormControl type="text" placeholder="Eg. Stephen H" />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Enter Publisher's name
                </Col>
                <Col sm={10}>
                <FormControl type="text" placeholder="Eg. Hawk Books" />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Enter Expected Price of the book in INR
                </Col>
                <Col sm={10}>
                <FormControl type="text" placeholder="Eg. 1460" />
                </Col>
            </FormGroup>  

            <FormGroup>
                <Col smOffset={2} sm={10}>
                <Button type="submit">Submit</Button>
                </Col>
            </FormGroup>
            <br/><br/>
            </Form>

                </Listcontainer>
                <Footer />    
            </div>
        

      );
    }
  }
  

  export default Donate;
