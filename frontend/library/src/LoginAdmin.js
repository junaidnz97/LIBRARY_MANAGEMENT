import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Well } from "react-bootstrap";
import Particles from 'react-particles-js';
//import Logo from './Logo.png'
import "./Login.css";

const LoginAdmin = () => {

    const particleOptions = {
      
    }
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
                <FormControl type="text" placeholder="Username" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                  <Col sm={12}>
                  <FormControl type="password" placeholder="Password" />
                  </Col>
              </FormGroup>
              <FormGroup>
                <center>
                <Col sm={12}>
                <Button type="submit">Login</Button>
                </Col>
                </center>
            </FormGroup>
                
            </Form>
          </Well>
        </form>
      </div>
    );
}
export default LoginAdmin;
