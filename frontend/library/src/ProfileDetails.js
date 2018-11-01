import React from 'react'
import {Link} from 'react-router-dom';
import { Table,thead } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Image, Col} from 'react-bootstrap';
import './ProfileDetails.css'

const ProfileDetails = (props) => {
	
	return (
    <div className="row">
        <div>
            <Col md={4}>
              <Image src="/placeholder-profile.png" circle />
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
      <td>{props.profiledetails.UserName}</td>
      <td>{props.profiledetails.CurrentYear}</td>
      <td>{props.profiledetails.UserId}</td>
      <td>{props.profiledetails.Dues}</td>
      <td>
        <Link to='/fine'>
          <Button bsStyle="primary">View Dues</Button>
        </Link>
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
    


export default ProfileDetails;

