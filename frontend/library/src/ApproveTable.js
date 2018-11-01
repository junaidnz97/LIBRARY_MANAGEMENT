import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class ApproveTable extends Component {
    
    render() {
        return (
            <div>
                <h2>Issue Requests</h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Username</th>
                        <th>Roll No.</th>
                        <th>Time of request</th>
                        <th>Action</th>
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
                        <td><Button bsSize="small" bsStyle="primary">Issue</Button><Button bsSize="small" bsStyle="primary">Reject</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td><Button bsSize="small" bsStyle="primary">Issue</Button><Button bsSize="small" bsStyle="primary">Reject</Button></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td><Button bsSize="small" bsStyle="primary">Issue</Button><Button bsSize="small" bsStyle="primary">Reject</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default ApproveTable;

