import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';


class PayAdminFollow extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    }
    render() {
      return (
        <div>
                    <h1>
                   <center> Complete Payment <small>Pay partially or complete fine</small></center>
                    </h1>
                <Form horizontal>
                        <br/><br/>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter amount being paid
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="in INR" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button type="submit">Pay</Button>
                    </Col>
                </FormGroup>
                </Form>
            </div>
        

      );
    }
  }
  

  export default PayAdminFollow;
