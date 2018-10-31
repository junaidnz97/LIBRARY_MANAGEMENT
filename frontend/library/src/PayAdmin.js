import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';


class PayAdmin extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    }
    render() {
      return (
        <div>
                <h1>
                   <center> Pay Fine <small>Click on pay fine below</small></center>
                </h1>
                <div>
                <h2>History of Books <Button bsStyle="primary" className="pull-right">Pay Fine</Button> </h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Date of issue</th>
                        <th>Date of return</th>
                        <th>Pending Fine in INR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td>10</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td>10</td>    </tr>
                        <tr>
                        <td>3</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td>15</td>    </tr>
                    </tbody>
                </Table>
            </div>   

                <br/><br/>
        </div>
        
        

      );
    }
  }
  

  export default PayAdmin;
