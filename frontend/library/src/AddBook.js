import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'
import * as axios from 'axios';

class AddBook extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        bname : '',
        btype : '',
        bedition : '',
        quantity : '',
        bdesc : '',
        publisher : '',
        isbn : '',
        authors : '',
        premium : ''
      }

      this.addBook = this.addBook.bind(this);
      this.handleChangebname = this.handleChangebname.bind(this);
      this.handleChangebtype = this.handleChangebtype.bind(this);
      this.handleChangebedition = this.handleChangebedition.bind(this);
      this.handleChangequantity = this.handleChangequantity.bind(this);
      this.handleChangebdesc = this.handleChangebdesc.bind(this);
      this.handleChangepublisher = this.handleChangepublisher.bind(this);
      this.handleChangeisbn = this.handleChangeisbn.bind(this);
      this.handleChangeauthors = this.handleChangeauthors.bind(this);
      this.handleChangepremium = this.handleChangepremium.bind(this);
    }


    addBook(){
        let getData = async () => {
          console.log("Add Book");
            let add =  await axios({
                method: 'post',
                url: '/add-book-record',
                data: {
                  bname : this.state.bname,
                  btype : this.state.btype,
                  bedition : this.state.bedition,
                  quantity : this.state.quantity,
                  bdesc : this.state.bdesc,
                  publisher : this.state.publisher,
                  isbn : this.state.isbn,
                  authors : this.state.authors,
                  premium : this.state.premium
                }
            });
            console.log("add function");
            console.log(add.data);

            if(add.data == "A book name is required." || add.data == "Book ISBN is required." || add.data == "Book quantity is required." || add.data == "Book already exists")
            {
              window.alert(add.data);
            }
            else{

              window.alert("Book added")
            }

            // if(log.data.status === 'login successful'){
            //     window.location.replace("/admin");
            // }
        }
        getData();
    }

    handleChangebname(e) {
       this.setState({ bname : e.target.value});
    }

    handleChangebtype(e) {
       this.setState({ btype: e.target.value});
    }

    handleChangebedition(e) {
       this.setState({bedition : e.target.value});
    }

    handleChangequantity(e) {
       this.setState({ quantity: e.target.value});
    }

    handleChangebdesc(e) {
       this.setState({ bdesc: e.target.value});
    }

    handleChangepublisher(e) {
       this.setState({publisher : e.target.value});
    }

    handleChangeisbn(e) {
       this.setState({ isbn: e.target.value});
    }

    handleChangeauthors(e) {
       this.setState({authors : e.target.value});
    }

    handleChangepremium(e) {
       this.setState({ premium: e.target.value});
    }



    render() {
      return (
        <div>
                    <h1>
                   <center> Add a Book <small>Enter details of the book you want to add</small></center>
                    </h1>
                <Form horizontal>
                        <br/><br/>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangebname}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book name
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. Theory of Everything" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangeauthors}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Author(s) name
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. Stephen H" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangepublisher}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Publisher name
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. Hawk Books" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangebedition}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Year of Edition
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 1990" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangepremium}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Premium?
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder='Type 1 for Yes and 0 for No ' />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangequantity}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Quantity
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder='Example 10 ' />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangeisbn}>
                    <Col componentClass={ControlLabel} sm={2}>
                    ISBN
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder='Book ISBN' />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangebtype}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Book Type
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder='Book Type' />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail" onChange={this.handleChangebdesc}>
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book Description
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
                    </Col>
                </FormGroup>


                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button onClick={this.addBook}>Submit</Button>
                    </Col>
                </FormGroup>
                </Form>
            </div>


      );
    }
  }


  export default AddBook;
