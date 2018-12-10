import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'
import * as axios from 'axios';


class TotalFine extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state={
          total:''
      }
  
    }
    componentDidMount(){
        let getData = async () => {            
            let tfine = await axios({
            method: 'get',
            url: '/totalfine',
          });
          console.log("Hello");
          console.log(tfine.data[0].totaldues);
         /* if(tfine.data[0]){
              this.props.history.push('/login');
          }
          else{
              this.setState({total:tfine.data[0].totaldues});
          }*/
          this.setState({total:tfine.data[0].totaldues});

          
      }
      getData();    
    }
    render() {
      return (
        <div>
                    <h1>
                   <center> Total Fine of all users: {this.state.total} rupees</center>
                    </h1>
                
            </div>
        

      );
    }
  }
  

  export default TotalFine;
