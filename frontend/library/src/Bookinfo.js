import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Bookstatic from './Bookstatic.js';
import Bookdynamic from './Bookdynamic.js';
import './Bookinfo.css';
import Rating from './Rating.js';
import {ButtonToolbar,Button,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';

class Bookinfo extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots : robots,
    //         //searchfield = ''
    //     }
    // }

    render() {
        return (
            <Grid>
              <Row className="show-grid">
              <Col md={6}>
                <Bookstatic book = {this.props.book}/>
              </Col>
              <Col md={6}>
                <Bookdynamic quantity = {this.props.book.AvailableQuantity}/>
              </Col>
            </Row>
           </Grid> 
        );
    }
}



export default Bookinfo;