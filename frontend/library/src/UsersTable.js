import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class UsersTable extends Component {
    
    render() {
        return (
            <div>
                <h2>View Users</h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>User Name</th>
                        <th>Name</th>
                        <th>Roll.No.</th>
                        <th>Semester</th>
                        <th>Fine Pending</th>
                        <th></th>
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
                        <td><Button bsSize="small" bsStyle="primary">View Profile</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td><Button bsSize="small" bsStyle="primary">View Profile</Button></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>22/10/2018</td>
                        <td>24/10/2018</td>
                        <td><Button bsSize="small" bsStyle="primary">View Profile</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default UsersTable;

