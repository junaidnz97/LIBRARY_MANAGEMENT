import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import * as axios from 'axios';
import UserInfo from './UserInfo';
import Userlisttrial from './trial2';
import Searchbox from './Searchbox'

class Sample extends Component{

    constructor(){
        super();
        this.state={
            start:'10',
            end:'100'
        }
        
    }
    Search = (event)=>{
        this.setState({start:document.getElementById('start').value,end:document.getElementById('end').value});
        //document.getElementById("list").style.display='block'; 
        //console.log("issue spotted");  
    }
    componentDidMount(){
        console.log("test");
    }
   
    render(){
        console.log(this.state);
        return(
            <div>
                <br/><br/><br/><br/>
                
                <Searchbox Search={this.Search}/>
                <p>{this.state.start}-------{this.state.end}</p>
                <Userlisttrial starting={this.state.start} ending={this.state.end}/>
                
            </div>
            
        );
    }
}
export default Sample;