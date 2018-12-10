import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UserInfo from './UserInfo';
import * as axios from 'axios';


class ShareBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
    }
    
    componentDidMount() {
        let getData = async () => {            
              let users = await axios({
              method: 'post',
              url: '/share-book-list',
              data: {
                  bid: this.props.location.state.BookId
              }
            });
            if(users.data.output){
                console.log("if");
                this.props.history.push('/login');
            }
            else if(users.data.status){
                window.alert("No students to display.")
            }
            else{
                console.log(users.data.users);
                this.setState({users: users.data.users});
            }
        }
        getData();
    }
    render() {

        const users = this.state.users;
        console.log(this.props.location.state.BookId)
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

export default ShareBooks;

