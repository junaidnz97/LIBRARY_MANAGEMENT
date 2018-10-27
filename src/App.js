import React, { Component } from 'react';
import { SideNav, Nav } from 'react-sidenav'
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SideNav defaultSelectedPath="1">
            <Nav id="1">Item 1</Nav>
            <Nav id="2">Item 2</Nav>
            <Nav id="3">Item 3</Nav>
        </SideNav>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
