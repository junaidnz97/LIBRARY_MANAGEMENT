import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Currentbook from './Currentbook.js';
import * as axios from 'axios';

class CurrenttableAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentbooks : []
        }
    }

    componentDidMount() {
        let getData = async () => {
              let currentbooks = await axios({
              method: 'get',
              url: '/books-in-possession_admin',
              params: {
                  username: this.props.username
              }
              
            });
            console.log("before cuurr")            

            if(currentbooks.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log(currentbooks.data.Details);
                this.setState({currentbooks: currentbooks.data.Details});
            }
        }
        console.log("SEMD", this.props.username)
        getData();
    }
    
    render() {

        const currentbooks = this.state.currentbooks;
        const Bookarray = currentbooks.map((book, i) =>{
            return (
                <Currentbook 
                    key={book.id} 
                    book={book}
                    index={i} 
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
                        {Bookarray}
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default CurrenttableAdmin;

