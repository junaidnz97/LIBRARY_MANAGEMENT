import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as axios from 'axios';
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import Cardlist from './Cardlist.js';
//import Searchbox from './Searchbox,js';
import {robots} from './robots.js';

class Bookcatalog extends Component {
    constructor() {
        super();
        this.state = {
            books : [],
            //searchfield = ''
        }
    }

    

    componentDidMount() {
        let getData = async () => {
            let res = await axios({
                method: 'post',
                url: '/login',
                data: {
                        username: '20160010060',
                        password: 'mynamedahiya'
                    }
            });
            console.log(res);
            let books = await axios({
              method: 'get',
              url: '/catalogue'
            });
        
            console.log(books.data["book-details"]);
            //let boks = books.data.bookDetails;
            this.setState({books: books.data["book-details"]});
        }
        getData();
    }

    render() {
        return (
            <div>
                <Header />
                <Listcontainer>
                    <Cardlist books = {this.state.books} />
                </Listcontainer>
            </div>
        );

    }
}

export default Bookcatalog;
