import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import * as axios from 'axios';



class Reservebook extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
            bookid : 0,
            
        } 
        
        this.handleBookidChange = this.handleBookidChange.bind(this);
        this.reserveBook = this.reserveBook.bind(this);
        
    }

    reserveBook() {
        console.log("reserving")
        let sendData = async () => {
            let log =  await axios({
                method: 'post',
                url: '/reserve-book',
                data: {
                    bid: this.state.bookid,                    
                }

            });
            console.log(log.data);
            if(log.data.status === 'login successful'){
                window.location.replace("/admin");
            }
            else{
                console.log("Runn", log.data);
                window.alert("Reserve Successful");
            }
        }
        sendData();
    }

    handleBookidChange(e) {
        this.setState({bookid: e.target.value});
    } 
    
    render() {
      return (
        <div>
                    <h1>
                   <center> Reserve a Book <small>Enter Book ID </small></center>
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
                
                
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button onClick={this.reserveBook}>Submit</Button>
                    </Col>
                </FormGroup>
                </Form>


            </div>
        

      );
    }
  }
  

  export default Reservebook;
