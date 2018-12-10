import React, { Component } from 'react';
import Header from './Header.js'
import {PageHeader, Button, Table} from 'react-bootstrap'
import Listcontainer from './Listcontainer.js'
import ProfileDetails from './ProfileDetails.js';
import * as axios from 'axios';
import CurrenttableAdmin from './CurrenttableAdmin.js';
import HistorytableAdmin from './HistorytableAdmin.js';

class ProfileAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiledetails : {}
        }
    }

    componentDidMount() {
        let getData = async () => {            
              let profiledetails = await axios({
              method: 'get',
              url: '/displayuserprofile_admin',
              params: {
                  username: this.props.location.state.username
              }
            });
            if(profiledetails.data.output){
                window.location.replace("/admin");
            }
            else{
                console.log(profiledetails.data);
                this.setState({profiledetails: profiledetails.data});
            }
        }
        getData();
    }

    render() {
        console.log("hhhhh", this.props.location.state.username)
        return (
            <div>
                <div className='bg-success'>
                <PageHeader>
                    Welcome to the Profile of <small>{this.state.profiledetails.UserName}</small>
                </PageHeader>
            </div>
                <Listcontainer>
                    <ProfileDetails profiledetails = {this.state.profiledetails}/>
                    <CurrenttableAdmin username={this.props.location.state.username}/>   
                    <HistorytableAdmin username={this.props.location.state.username}/>
                </Listcontainer>
            </div>
        );

    }
}

export default ProfileAdmin;
