import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'
import * as axios from 'axios';

class DeleteBook extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        bid : ''
      }

      console.log("hello");

      this.deleteBook = this.deleteBook.bind(this);
      this.handleChange = this.handleChange.bind(this)
    }


    deleteBook(){
      console.log("Delete Book");
        let getData = async () => {
            let del =  await axios({
                method: 'post',
                url: '/delete-book-record',
                data: {
                  bid : this.state.bid
                }
            });
            // console.log("add function");
            console.log("data:\n" + del.data);
            if(del.data['affectedRows'] == 1){
                window.alert("Book Successfully Deleted");
            }
            else {
              {
                window.alert("Book does not exist")
              }
            }
        }
        getData();
    }

    handleChange(e) {
       this.setState({ bid : e.target.value});
    }

    render() {
      return (
        <div>
                    <h1>
                   <center> Delete a Book <small>Enter Book ID of the book you want to delete</small></center>
                    </h1>
                <Form horizontal>
                        <br/><br/>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChange}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book ID
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 15" />
                    </Col>
                </FormGroup>



                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button onClick={this.deleteBook} >Submit</Button>
                    </Col>
                </FormGroup>
                </Form>
            </div>


      );
    }
  }


  export default DeleteBook;
