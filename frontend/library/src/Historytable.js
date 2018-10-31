import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Historybook from './Historybook.js';
import * as axios from 'axios';


class Historytable extends Component {
    
    constructor() {
        super();
        this.state = {
            previousbooks : []
        }
    }

    componentDidMount() {
        let getData = async () => {            
              let previousbooks = await axios({
              method: 'get',
              url: '/books-history'
            });
            if(previousbooks.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log(previousbooks.data.Details);
                this.setState({previousbooks: previousbooks.data.Details});
            }
        }
        getData();
    }



    render() {

        const previousbooks = this.state.previousbooks;
        const Bookarray = previousbooks.map((book, i) =>{
            return (
                <Historybook 
                    key={book.id} 
                    book={book}
                    index={i} 
                />
            );
        });


        return (
            <div>
                <h2>Previous books in Possession </h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Date of issue</th>
                        <th>Date of return</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Bookarray}
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default Historytable;

