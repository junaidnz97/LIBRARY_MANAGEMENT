import React, { Component } from 'react';
import './Bookdynamic.css';
import Rating from './Rating.js';
import {ButtonToolbar,Button,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';


class Bookdynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableBooks: this.props.quantity
        }
    }

    render() {
        return (
            <div class="card">
                    <div class="card__content2">
                    <div>
                        <h3>Books available: {this.state.availableBooks}</h3>
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
                        <Button bsStyle="primary" style={{float:"right"}} type="submit">Submit</Button>

                        </FormGroup>
                      </form>    
                    </div>
              </div>
        );
    }
}



export default Bookdynamic;