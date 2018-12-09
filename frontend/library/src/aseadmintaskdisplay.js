import React, { Component } from 'react';
import {Container} from 'reactstrap'
import {Link, Redirect} from 'react-router-dom';
import * as axios from 'axios';
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import {Pagination, Table} from 'react-bootstrap';
import Cardlist from './Cardlist.js';
import Navbar from './Navbar.js';
import UserInfo from "./UserInfo";
import Aseoutputtable from "./Aseoutputtable"

class aseadmintaskdisplay extends Component {
    constructor() {
        super();
        this.state = {
            output : [],

        }
    }



    componentDidMount() {
        // console.log(this.props.history.location.state.searchVal);
        let getData = async () => {

            console.log(this.props.history.location.state.searchVal1);
            console.log(this.props.history.location.state.searchVal2);

            let output = await axios({
              method: 'get',
              url: '/aseadmintask',
              params: {
                query1: this.props.history.location.state.searchVal1,
                  query2:this.props.history.location.state.searchVal2
              }
            });

            console.log(output.data);

            this.setState({output:output.data});
            /*if(output.data.output){
                console.log(this.props)
                this.props.history.push('/login');
                console.log("went in", books.data.output);
            }
            else{
                console.log(books.data);
                this.setState({books: books.data});
            }*/
        }
        getData();
    }

    render() {
        const outputarray = this.state.output.map((element, i) =>{
            console.log("hello");
            console.log(element.BookId);
            return (

                <Aseoutputtable
                    id={element.BookId}
                    bname={element.BookName}
                    index={i}
                    bedition={element.BookEdition}
                />
            );
        });
        return (

            <Table responsive>
                <thead>
                <tr>
                    <th>BID</th>
                    <th>Book Name</th>
                    <th>Bookind</th>
                    <th>BookEdition</th>


                </tr>
                </thead>
                <tbody>
                {outputarray}
                </tbody>
            </Table>

        );

    }
}

export default aseadmintaskdisplay;