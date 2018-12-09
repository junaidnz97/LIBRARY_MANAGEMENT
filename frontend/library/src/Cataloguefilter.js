import React, { Component } from 'react';
import {Container} from 'reactstrap'
import {Link, Redirect} from 'react-router-dom';
import * as axios from 'axios';
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import {Pagination} from 'react-bootstrap';
import Cardlist from './Cardlist.js';
import Navbar from './Navbar.js';



//var React = require('react');
//var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Cataloguefilter extends Component {
    constructor() {
        super();
        this.state = {
            books : [],
            c: 1,
            points:[]
        };

    }



    componentDidMount() {
        // console.log(this.props.history.location.state.searchVal);
        let getData = async () => {
            let books = await axios({
                method: 'get',
                url: '/cataloguefilter',
                params: {
                    query: this.props.history.location.state.searchVal
                }
            });
            if(books.data.output){
                console.log(this.props)
                this.props.history.push('/login');
                console.log("went in", books.data.output);
            }
            else{
                //console.log(books.data);
                var temp=[];

                for(var i=0;i<10;i++) {
                    var temp2={
                        label:"",
                        y:null
                    };
                    //console.log((books.data[i]));
                    temp2.label=books.data[i].BookName;
                    temp2.y=books.data[i].BookId;
                    console.log(temp2);
                    console.log("hello");
                    temp.push(temp2);
                }

                this.setState({points:temp});
                this.setState({books: books.data});
                for(var i=0;i<10;i++) {
                    //console.log((books.data[i]));

                    console.log(this.state.points[i]);
                }
            }
        }
        getData();
    }


    render() {



        const options = {
            title: {
                text: "Basic Column Chart"
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: this.state.points
                }
            ]
        }
		
		return (
		<div>
			<p></p>
            <p></p>
            <p></p>
            <p></p>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 


/*class Cataloguefilter extends Component {
    constructor() {
        super();
        this.state = {
            books : [],
            c: 1,
        }
    }

    

    componentDidMount() {
        // console.log(this.props.history.location.state.searchVal);
        let getData = async () => {            
              let books = await axios({
              method: 'get',
              url: '/cataloguefilter',
              params: {
                query: this.props.history.location.state.searchVal
              }
            });
            if(books.data.output){
                console.log(this.props)
                this.props.history.push('/login');
                console.log("went in", books.data.output);
            }
            else{
                console.log(books.data);
                this.setState({books: books.data});
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
}*/

export default Cataloguefilter;