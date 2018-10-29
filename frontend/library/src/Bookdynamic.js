import React, { Component } from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';
import Sharebutton from './Sharebutton.js'
import Borrowbutton from './Borrowbutton.js'

class Bookdynamic extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots : robots,
    //         //searchfield = ''
    //     }
    // }

    render() {
        return (
            <div>
                <h3>Books available</h3>
                <br/>
                <Button bsSize='large' bsStyle="primary">Borrow Book</Button>
                <Button bsSize='large' bsStyle="primary">Share Books</Button>
            </div>
        );
    }
}



export default Bookdynamic;