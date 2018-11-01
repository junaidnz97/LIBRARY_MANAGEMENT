import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'


class AddBook extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    }
    render() {
      return (
        <div>
                    <h1>
                   <center> Add a Book <small>Enter details of the book you want to add</small></center>
                    </h1>
                <Form horizontal>
                        <br/><br/>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book's name
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. Theory of Everything" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Author(s) name
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
                    Enter number of copies of the book
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 7" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Price of the book in INR
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
                </Form>
            </div>
        

      );
    }
  }
  

  export default AddBook;
