import React, { Component } from 'react';
import {Container} from 'reactstrap'
import {Link, Redirect} from 'react-router-dom';
import * as axios from 'axios';
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import {Pagination} from 'react-bootstrap';
import Cardlist from './Cardlist.js';
import Navbar from './Navbar.js';

class Bookcatalog extends Component {
    constructor() {
        super();
        this.state = {
            books : [],
            c: 1,
        }
    }

    

    componentDidMount() {
        let getData = async () => {            
              let books = await axios({
              method: 'get',
              url: '/catalogue'
            });
            if(books.data.output){
                console.log(this.props)
                this.props.history.push('/login');
                console.log("went in", books.data.output);
            }
            else{
                console.log(books.data["book-details"]);
                this.setState({books: books.data["book-details"]});
            }
        }
        getData();
    }

    render() {
        return (
            <div>
                <Header />
                <Listcontainer>
                <Container fluid>
                    <Cardlist books = {this.state.books} />
                    <center>
                        <Pagination>                          

                        {(() => {
                            switch(this.state.c) {
                                case 1:
                                    return <React.Fragment><Pagination.Prev disabled/>
                                    <Pagination.Item>{this.state.c}</Pagination.Item>
                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{6}</Pagination.Item>
                                    <Pagination.Next/>
                                    <Pagination.Last/>
                                    </React.Fragment>
                                case 6:
                                    return <React.Fragment><Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{5}</Pagination.Item>
                                    <Pagination.Item>{6}</Pagination.Item>
                                    <Pagination.Item disabled>{7}</Pagination.Item></React.Fragment>
                                default:
                                    return <React.Fragment>
                                        <Pagination.First/>    
                                        <Pagination.Prev/>
                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{this.state.c-1}</Pagination.Item>
                                        <Pagination.Item>{this.state.c}</Pagination.Item>
                                        <Pagination.Item>{this.state.c+1}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Next/>
                                        <Pagination.Last/>
                                    </React.Fragment>
                                }
                        })()}
 
                        </Pagination>
                        </center>
                </Container>                        
                </Listcontainer>
            </div>

        );

    }
}

export default Bookcatalog;
