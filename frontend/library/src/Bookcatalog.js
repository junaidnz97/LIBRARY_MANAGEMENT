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
            currentpage:0,
            showperpage:10
        };
       this.handleClick= this.handleClick.bind(this);

    }

    handleClick(e)
    {
        this.setState({currentpage:Number(e.target.id)});

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
        console.log("chai peelo");


        const pageNumbers = [];
        for (let i = 0; i <= 7; i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <button
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </button>


            );
        });
        console.log(renderPageNumbers);

        return (
            <div>
                <Header />
                <Listcontainer>
                <Container fluid>
                    <Cardlist books = {this.state.books} pageno={this.state.currentpage} />
                    <center >

                        {renderPageNumbers}


                        <br/>
                        <br/>
                        <br/>
                        <br/>


                        </center>
                </Container>

                </Listcontainer>


            </div>

        );

    }
}

export default Bookcatalog;
