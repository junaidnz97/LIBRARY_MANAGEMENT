import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Well } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';
import LoginAdmin from './LoginAdmin.js';
//import Logo from './Logo.png'
import "./Login.css";

const Login = () => {

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
          <Button
            block
            bsSize="large"
            href="https://serene-wildwood-35121.herokuapp.com/login/5bd46914c77c1c0015cd830a"
          >
            Student Login 
          </Button>
          <Link to='/admin/login'>
            <Button
              block
              bsSize="large"
            >
            Admin Login
          </Button>
          </Link>

          </Well>
        </form>
      </div>
    );
}
export default Login;
