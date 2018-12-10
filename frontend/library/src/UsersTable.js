import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UserInfo from './UserInfo';
import * as axios from 'axios';


class UsersTable extends Component {

    constructor() {
        super();
        this.state = {
            users : []
        }
    }
    
    componentDidMount() {
        let getData = async () => {            
              let users = await axios({
              method: 'get',
              url: '/view-user-list'
            });
            if(users.data.output){
                console.log("if");
                this.props.history.push('/login');
            }
            else{
                console.log(users.data.users[10]);
                this.setState({users: users.data.users});
            }
        }
        getData();
    }
    render() {

        const users = this.state.users;
        const Userarray = users.map((user, i) =>{
            return (
                <UserInfo 
                    key={user.UserId} 
                    user={user}
                    index={i} 
                />
            );
        });

        return (
            <div>
                <h2>View Users</h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>User Name</th>
                        <th>Name</th>
                        <th>Roll.No.</th>
                        <th>Semester</th>
                        <th>Fine Pending</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Userarray}
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default UsersTable;

