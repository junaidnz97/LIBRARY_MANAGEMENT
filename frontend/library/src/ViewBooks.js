import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class ViewBooks extends Component {
    
    render() {
        return (
            <div>
                <h2>Books Catalogue</h2>
                <br/>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author(s)</th>
                        <th>Publisher</th>
                        <th>ISBN</th>
                        <th>Number of Books Available</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>asdad45</td>
                        <td><center>6</center></td>
                        <td><Button bsSize="small" bsStyle="primary">EDIT</Button><Button bsSize="small" bsStyle="primary">DELETE</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>asdasd3</td>
                        <td><center>8</center></td>
                        <td><Button bsSize="small" bsStyle="primary">EDIT</Button><Button bsSize="small" bsStyle="primary">DELETE</Button></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Theory of Everything</td>
                        <td>Stephen.H</td>
                        <td>Hawk Books</td>
                        <td>asdasd43</td>
                        <td><center>8</center></td>
                        <td><Button bsSize="small" bsStyle="primary">EDIT</Button><Button bsSize="small" bsStyle="primary">DELETE</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default ViewBooks;

