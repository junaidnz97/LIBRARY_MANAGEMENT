import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Well } from "react-bootstrap";
//import Header from './Header'
//import Footer from './Footer'
import Logo from './Logo.png'
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  

  render() {
    return (
      <div className="Login">
      
        <form className="center" onSubmit={this.handleSubmit}>
        <Well>

          <center><img src={Logo} width={200} height={200} /></center><br></br><br></br><br></br><br></br>
          <FormGroup controlId="email" bsSize="large">
            
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
          </Well>
        </form>
      </div>
    );
  }
}
