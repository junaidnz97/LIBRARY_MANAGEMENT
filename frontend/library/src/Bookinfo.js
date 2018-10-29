import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import './Bookinfo.css';
import Rating from './Rating.js';
import {ButtonToolbar,Button,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';

import Bookdynamic from './Bookdynamic.js';

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
 
                <div class="card1">
                    <img class="card__image" src="https://placeimg.com/250/300/animals" width="240px" height="300px"/>      
                    <div class="card__content">
                      <h3>Book Name</h3>
                      <p>
                          <strong>Author(s):</strong> Aditya
                      </p>
                      <p>
                          <strong>Publisher(s):</strong> Junaid
                      </p>
                      <p>
                          <strong>Edition:</strong> 3
                      </p>
                      <p>
                          <strong>Total Books:</strong> 8
                      </p>
                      <p>Description</p>
                      <div class="card__rating">
                        <span>3.0 </span>
                        <span class="card__stars--active">★★★</span>
                        <span class="card__stars--inactive">★★</span>
                      </div>
                    </div>
              </div>
            </Col>
            <Col md={6}>
 
                <div class="card">
                    <div class="card__content2">
                    <div>
                        <h3>Books available</h3>
                        <br/>
                        <ButtonToolbar>
                        <Button bsStyle="primary">Borrow Book</Button>
                        <Button bsStyle="primary">Share Books</Button>
                        </ButtonToolbar>
                    </div>
                      <form>
                        <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>
                            

                        </ControlLabel>

                        <FormControl bsSize="large" componentClass="textarea" placeholder="Write your review here..." />
                        <Rating/><br/> 
                        <Button style={{float:"right"}} type="submit">Submit</Button>


                        </FormGroup>
                      </form>    
                    </div>
              </div>
            </Col>
            </Row>
           </Grid> 
        );
    }
}



export default Bookinfo;