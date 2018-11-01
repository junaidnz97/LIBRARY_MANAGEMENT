import React from 'react';
import {Button} from 'react-bootstrap';

const UserInfo = (props) => {
	return (
		<tr>
	        <td>{props.index + 1}</td>
	        <td>{props.user.UserName}</td>
	        <td>{props.user.FirstName + props.user.LastName}</td>
	        <td>{props.user.RollNumber}</td>
	        <td>{props.user.Semester}</td>
	        <td>{props.user.Dues}</td>
	        <td>
		        <Button bsSize="small" bsStyle="primary">
		        	View Profile
		        </Button>
	        </td>
        </tr>
	);
}

export default UserInfo;