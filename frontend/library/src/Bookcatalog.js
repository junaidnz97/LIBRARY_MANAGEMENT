import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import {Pagination} from 'react-bootstrap';
import Cardlist from './Cardlist.js';
//import Searchbox from './Searchbox,js';
import {robots} from './robots.js';

class Bookcatalog extends Component {
    constructor() {
        super();
        this.state = {
            robots : robots,
            //searchfield = '',
            c: 1,
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Listcontainer>
                    <Cardlist robots = {this.state.robots} />
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

                </Listcontainer>
            </div>
        );

    }
}

export default Bookcatalog;
