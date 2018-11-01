import React, { Component } from 'react';
import Header from './Header.js'
import {PageHeader, Button, Table} from 'react-bootstrap'
import Listcontainer from './Listcontainer.js'
import Currenttable from './Currenttable.js';
import Historytable from './Historytable.js';
import ProfileDetails from './ProfileDetails.js';
import * as axios from 'axios';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profiledetails : {}
        }
    }

    componentDidMount() {
        let getData = async () => {            
              let profiledetails = await axios({
              method: 'get',
              url: '/displayuserprofile'
            });
            if(profiledetails.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log(profiledetails.data);
                this.setState({profiledetails: profiledetails.data});
            }
        }
        getData();
    }

    render() {
        return (
            <div>
                <Header />
                <Listcontainer>
                    <ProfileDetails profiledetails = {this.state.profiledetails}/>
                    <Currenttable />   
                    <Historytable />
                </Listcontainer>
            </div>
        );

    }
}

export default Profile;
