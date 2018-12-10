import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class UserInfo extends Component {
	constructor(props){
		super(props);

	}


	render() {

		return (
			<tr>
				<td>{this.props.index + 1}</td>
				<td>{this.props.user.UserName}</td>
				<td>{this.props.user.FirstName + " " + this.props.user.LastName}</td>
				<td>{this.props.user.RollNumber}</td>
				<td>{this.props.user.Semester}</td>
				<td>{this.props.user.Dues}</td>
				<td>
				<Link to = {{ pathname: '/fe/admin/viewprofile_admin', state: { username: this.props.user.UserName} }}>
					<Button bsSize="small" bsStyle="primary">
						View Profile
					</Button>
				</Link>	
				</td>
			</tr>
		);
	}
}

export default UserInfo;