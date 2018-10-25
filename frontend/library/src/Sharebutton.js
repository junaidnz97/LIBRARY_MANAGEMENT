import React, { Component } from 'react';
import './Sharebutton.css'

class Sharebutton extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots : robots,
    //         //searchfield = ''
    //     }
    // }

    showdrop() {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    render() {
        return (
            <div className="dropdown">
                <button onClick={this.showdrop.bind(this)} className="dropbtn">Share Books</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        );

    }
}

export default Sharebutton;