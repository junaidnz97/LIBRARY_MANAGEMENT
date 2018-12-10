import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/es/Navbar";


class aseadmintask extends React.Component {

    constructor() {
        super();
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.state = {
            value1: '',
            value2:''
        }
    }

    handleChange1(e) {
        this.setState({ value1: e.target.value });
    }

    handleChange2(e){
        this.setState({ value2:e.target.value });
    }

    render() {
        return (
            <div>

                <Form horizontal>
                    Enter Student ID
                    <FormGroup>
                        <FormControl
                            type="text"
                            value={this.state.value1}
                            placeholder="Student ID"
                            onChange={this.handleChange1}
                        />
                        Enter Book ID
                        <FormControl
                            type="text"
                            value={this.state.value2}
                            placeholder="Book ID"
                            onChange={this.handleChange2}
                        />

                        <Link to = {{ pathname: '/admin/aseadmintaskdisplay', state: { searchVal1: this.state.value1,searchVal2: this.state.value2} }}>
                            <Button>Filter Now</Button>
                        </Link>
                    </FormGroup>{' '}
                </Form>
            </div>


        );
    }
}


export default aseadmintask;
