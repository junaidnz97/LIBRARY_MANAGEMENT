import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'


class EditBook extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    }
    render() {
      return (
        <div>
                    <h1>
                   <center> Edit a Book <small>Enter Book ID and details of the book you want to edit</small></center>
                    </h1>
                <Form horizontal>
                        <br/>Fields marked * are mandatory<br/>
                        <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book ID*
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 15" />
                    </Col>
                </FormGroup>
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
                    Enter Year of Edition
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 1990" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Premium?
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder='Type 1 for Yes and 0 for No ' />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book Description
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
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
  

  export default EditBook;
