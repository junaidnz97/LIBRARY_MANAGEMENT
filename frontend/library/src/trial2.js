import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import * as axios from 'axios';
import UserInfo from './UserInfo';


class Userlisttrial extends Component{

    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log("prevprops",prevProps,"curr",this.props)
        if (prevProps !== this.props){
            console.log("TRIAL2");
            let datafetch = async() =>{
                console.log(this.props);
                let users = await axios({
                    method: 'get',
                    url : '/trial',
                    params: {
                        start: this.props.starting,
                        end: this.props.ending
                    }
                });
                console.log(users.data);
                this.setState({users: users.data.users});
            }
            datafetch();
        }
            
    }
    render(){
        
        

        const users = this.state.users;
        console.log("users",users);
        const Userarray = users.map((user, i) =>{
            console.log("in render");
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
export default Userlisttrial;