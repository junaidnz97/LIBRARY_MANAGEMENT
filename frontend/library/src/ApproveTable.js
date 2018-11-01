import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import RequestedBook from './RequestedBook';
import * as axios from 'axios';


class ApproveTable extends Component {

    constructor() {
        super();
        this.state = {
            requestedBooks : []
        }
    }
    
    componentDidMount() {
        let getData = async () => {            
              let requestedBooks = await axios({
              method: 'post',
              url: '/view-request-admin',
              data: {
                disp: 1
              }
            });
            if(requestedBooks.data.output){
                console.log("if");
                this.props.history.push('/login');
            }
            else{
                console.log(requestedBooks.data);
                this.setState({requestedBooks: requestedBooks.data});
            }
        }
        console.log("mount")
        getData();
    }

    render() {

        const requestedBooks = this.state.requestedBooks;
        const Bookarray = requestedBooks.map((book, i) =>{
            return (
                <RequestedBook 
                    key={book.id} 
                    book={book}
                    index={i} 
                />
            );
        });

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
                        {Bookarray}
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default ApproveTable;

