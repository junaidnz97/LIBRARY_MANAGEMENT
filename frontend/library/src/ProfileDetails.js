import React , {Component} from 'react'
import {Link} from 'react-router-dom';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Image, Col} from 'react-bootstrap';
import './ProfileDetails.css'
import placeholderprofile from './placeholderprofile.png';
import * as axios from 'axios';




class ProfileDetails extends Component {
  constructor(props){
  super(props);

  this.paydues = this.paydues.bind(this);
  }

  paydues = () => {
    let sendData = async () => { 
      console.log("YAYYY", this.props.profiledetails.UserId, this.props.profiledetails.Dues)           
      let details = await axios({
      method: 'post',
      url: '/pay-fine',
      data: {
          username: this.props.profiledetails.UserId,
          DueAmount: this.props.profiledetails.Dues,
          PaidAmount: this.props.profiledetails.Dues,
          PaymentMethod: 'Cash'
      }
    });
      if(details.data.output){
          window.location.replace("/admin");
      }
      else{
          console.log(details.data);
          window.alert("Dues cleared");
      }
      }
    sendData();
  }

  render() {
	
    return (
      <div className="row">
          <div>
              <Col md={4}>
                <Image src={placeholderprofile} circle />
              </Col>
          </div>
          <br /><br /><br />
          <div className="col-md-6 ">
          <Table responsive>
          <thead>
      <tr>
        <th>Name</th>
        <th>UG</th>
        <th>Roll No.</th>
        <th>Fine Pending</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{this.props.profiledetails.UserName}</td>
        <td>{this.props.profiledetails.CurrentYear}</td>
        <td>{this.props.profiledetails.UserId}</td>
        <td>{this.props.profiledetails.Dues}</td>
        <td>
            <Button bsStyle="primary" onClick={this.paydues}>Pay Full Dues</Button>
        </td></tr>
      </tbody>
      </Table>
          </div>
      <div className="row">
      <div className="col-md-12">
      </div>
      </div>        
      </div>
      );
  }
}
    


export default ProfileDetails;

