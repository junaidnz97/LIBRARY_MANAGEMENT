import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Well, Form, Col } from "react-bootstrap";
import Particles from 'react-particles-js';
import * as axios from 'axios';
//import Logo from './Logo.png'
import "./Login.css";




class LoginAdmin extends Component {

    constructor() {
        super();
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            username : '',
            password: ''
        }
    }

    login(){
        let getData = async () => {
            let log =  await axios({
                method: 'post',
                url: '/fe/admin/login',
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            });
            console.log(log.data);
            if(log.data.status === 'login successful'){
                window.location.replace("/fe/admin");
            }
        }
        getData();
    }    

    handleUsernameChange(e) {
       this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
       this.setState({password: e.target.value});
    }




    render() {
    return (
      <div className="Login">
        <Particles
              className="particles" 
              params={{particles: {
                        number: {
                          value: 60,
                          density: {
                            enable: true,
                            value_area: 800
                          }
                        }
                      }}}
        />
        <form className="center" onSubmit={this.handleSubmit}>
        <Well>

          <center><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/IIIT_Sri_City_Logo.png/220px-IIIT_Sri_City_Logo.png" width={200} height={200} /></center><br/>
          <Form horizontal>
                  <br/>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={12}>
                <FormControl type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                  <Col sm={12}>
                  <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                  </Col>
              </FormGroup>
              <FormGroup>
                <center>
                <Col sm={12}>
                    <Button onClick={this.login}>Login</Button>
                </Col>
                </center>
            </FormGroup>
                
            </Form>
          </Well>
        </form>
      </div>
    );
}
}
export default LoginAdmin;
