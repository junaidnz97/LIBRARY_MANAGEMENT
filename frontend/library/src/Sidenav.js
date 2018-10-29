import React, { Component } from 'react';
import './Sidenav.css'


class Sidenav extends Component {
    constructor() {
        super();
    }

    render() {
        return (

                <div class="s-layout">
                <div class="s-layout__sidebar">
                <a class="s-sidebar__trigger" href="#0">
                    <i class="fa fa-bars"></i>
                </a>

                <nav class="s-sidebar__nav">
                    <ul>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-users"></i><em>View Users</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-book"></i><em>View Books</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-edit"></i><em>Edit Book records</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-trash"></i><em>Delete Book records</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-money"></i><em>Pay Fine</em>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-key"></i><em>Change Password</em>
                        </a>
                        </li>
                    </ul>
                </nav>
                </div>
                
                </div>
    );
 }
}

export default Sidenav;
