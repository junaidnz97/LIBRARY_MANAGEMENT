import React, { Component } from 'react';
import {ButtonToolbar} from 'react-bootstrap';
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
                <ButtonToolbar>
                    <Borrowbutton />
                    <Sharebutton />
                </ButtonToolbar>
            </div>
        );
    }
}



export default Bookdynamic;