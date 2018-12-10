import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'
import * as axios from 'axios';



class ReturnBook extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
            bookid : 0,
            hbookid: 0,
            userid: 0
        } 
        
        this.handleBookidChange = this.handleBookidChange.bind(this);
        this.handleHBookidChange = this.handleHBookidChange.bind(this);
        this.handleUseridChange = this.handleUseridChange.bind(this);
        this.returnBook = this.returnBook.bind(this);
        
    }

    returnBook() {
        let sendData = async () => {
            let log =  await axios({
                method: 'post',
                url: '/return',
                data: {
                    bookId: this.state.bookid,
                    hbookId: this.state.hbookid,
                    userid: this.state.userid
                }
            });
            console.log(log.data);
            if(log.data.status === 'login successful'){
                window.location.replace("/admin");
            }
            else{
                window.alert("Return Sucessful");
            }
        }
        sendData();
    }

    handleBookidChange(e) {
        this.setState({bookid: e.target.value});
    } 
    handleHBookidChange(e) {
        this.setState({hbookid: e.target.value});
    }
    handleUseridChange(e) {
        this.setState({userid: e.target.value});
    }

    render() {
      return (
        <div>
                    <h1>
                   <center> Return a Book <small>Enter Book IDs, UserID for check-in</small></center>
                    </h1>
                <Form horizontal>
                        <br/><br/>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleBookidChange}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book ID
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 15" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleHBookidChange}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter HardBook ID
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 15" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleUseridChange}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter User ID
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 15" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button onClick={this.returnBook}>Submit</Button>
                    </Col>
                </FormGroup>
                </Form>
            </div>
        

      );
    }
  }
  

  export default ReturnBook;
