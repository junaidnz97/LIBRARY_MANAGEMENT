import React, { Component } from 'react';
import { Table,thead } from 'react-bootstrap';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Navbar from './Navbar.js'
import Header from './Header.js'
import Listcontainer from './Listcontainer.js'
import * as axios from 'axios';
import Footer from './Footer.js'
import Historytable from './Historytable.js'
import ProfileDetails from './ProfileDetails.js'
import {PageHeader} from 'react-bootstrap'
import Fine from './Fine.js';


class Payfine extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        fines: [],
        totalDues: 0
      }
  
    }

    componentDidMount() {
        let getData = async () => {            
              let fines = await axios({
              method: 'post',
              url: '/fine-amount'
            });
            if(fines.data.output){
                console.log("noooo", fines.data);
                window.location.replace("/fe/admin");
            }
            else{
                console.log(fines.data);
                this.setState({fines: fines.data.Details, totalDues:fines.data.Dues[0].Dues});
            }
        }
        getData();
    }


    render() {
        
    const fines = this.state.fines;
        const Finearray = fines.map((fine, i) =>{
            return (
                <Fine 
                    key={i} 
                    fine = {fine}
                    index={i} 
                />
            );
        });  

      return (
        <div>
                <div className='bg-success'>
                    <PageHeader>
                    Pay Fine <small>Total Pending in INR: {this.state.totalDues}</small>
                    </PageHeader>
                </div>
                <Listcontainer>
                <div>
                <h2>Total Dues: {this.state.totalDues} <Button bsStyle="primary" className="pull-right">Visit the librarian to pay your dues</Button> </h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Date of issue</th>
                        <th>Date of return</th>
                        <th>Pending Fine in INR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Finearray}
                    </tbody>
                </Table>
            </div>   
                </Listcontainer>
                <br/><br/><br/><br/><br/>
        </div>
        
        

      );
    }
  }
  

  export default Payfine;
