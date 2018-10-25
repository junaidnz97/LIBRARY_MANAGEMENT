import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class Historytable extends Component {
    
    render() {
        return (
            <div>
                <h2>History of Books </h2>
                <Table responsive>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Book name</th>
      <th>Author</th>
      <th>Publisher</th>
      <th>Date of issue</th>
      <th>Date of return</th>
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
      <td><Button bsStyle="primary">REISSUE</Button><Button bsStyle="primary">RETURN</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Theory of Everything</td>
      <td>Stephen.H</td>
      <td>Hawk Books</td>
      <td>22/10/2018</td>
      <td>24/10/2018</td>
      <td><Button bsStyle="primary">REISSUE</Button><Button bsStyle="primary">RETURN</Button></td>    </tr>
    <tr>
      <td>3</td>
      <td>Theory of Everything</td>
      <td>Stephen.H</td>
      <td>Hawk Books</td>
      <td>22/10/2018</td>
      <td>24/10/2018</td>
      <td><Button bsStyle="primary">REISSUE</Button><Button bsStyle="primary">RETURN</Button></td>    </tr>
  </tbody>
</Table>;
            </div>
        );

    }
}

export default Historytable;

