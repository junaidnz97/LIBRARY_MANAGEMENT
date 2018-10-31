import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Currentbook from './Currentbook.js';
import * as axios from 'axios';

class Currenttable extends Component {

    constructor() {
        super();
        this.state = {
            currentbooks : []
        }
    }

    componentDidMount() {
        let getData = async () => {            
              let currentbooks = await axios({
              method: 'get',
              url: '/books-in-possession'
            });
            if(currentbooks.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log(currentbooks.data);
                this.setState({currentbooks: currentbooks.data});
            }
        }
        getData();
    }
    
    render() {

        const currentbooks = this.state.currentbooks;
        const Bookarray = currentbooks.map((book) =>{
            return (
                <Currentbook 
                    key={book.id} 
                    book={book} 
                />
            );
        });

        return (
            <div>
                <h2>Current books in Possession</h2>
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
                </Table>
            </div>
        );

    }
}

export default Currenttable;

