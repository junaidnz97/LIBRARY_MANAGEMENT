import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl} from 'react-bootstrap';
import './Navbar.css';
import placeholderprofile from './placeholderprofile.png';
import * as axios from 'axios';

const logout = () => {
	let log =  axios({
		method: 'post',
		url: '/logout',		
	});
}


const Navigation = () => {

	return (
		<Navbar inverse collapseOnSelect fixedTop>
	  		<Navbar.Header>
	    		<Navbar.Brand>
	      			<Link to='/'>
	      				<img className="sricity" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/IIIT_Sri_City_Logo.png/220px-IIIT_Sri_City_Logo.png"  />
	      				Project B-02
	      			</Link>

	    		</Navbar.Brand>
	    		<Navbar.Toggle />
	 		</Navbar.Header>
	  		<Navbar.Collapse>
			    <Nav>
					<NavItem eventKey={2} onClick={_ => window.history.back()}   href="#">
			    		<i class="fa fa-chevron-left"></i> Back
			    	</NavItem>
			      	<NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
			        	<MenuItem eventKey={3.1}>Mathematics</MenuItem>
				        <MenuItem eventKey={3.2}>Electronics</MenuItem>
				        <MenuItem eventKey={3.3}>Programming</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>Journals</MenuItem>
			      	</NavDropdown>
				    <Navbar.Form pullLeft>
				     	<FormGroup>
				    		<FormControl type="text"  placeholder="Search" />
				    	</FormGroup>{' '}
				    </Navbar.Form>
				    
			    </Nav>
			    <Nav pullRight>
					<NavItem eventKey={2} href="#">
			    		<i class="fa fa-bell"></i> Notifications
			    	</NavItem>
			    	<NavDropdown eventKey={3} 
			    		title={ <span>
			    				<i class="fa fa-user"></i> Welcome User !
			    			</span>
			    		} 
			    		id="basic-nav-dropdown">
			        	<MenuItem eventKey={3.1}>
				        	<Link to='/suggest'>
				        		Suggest a Book
				        	</Link>
			        	</MenuItem>
				        <MenuItem eventKey={3.2}>
					        <Link to='/donate'>
					       		Donate a Book
					        </Link>
				        </MenuItem>
				        <MenuItem eventKey={3.3}>
				        	<Link to='/fine'>
				        		View Dues
				        	</Link>
				        </MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3} onClick={logout}>Logout</MenuItem>
			      	</NavDropdown>
					<Navbar.Brand>
	      			<Link to='/profile'>
	      				<img className="sricity" src={placeholderprofile}  />	
	      			</Link>
					</Navbar.Brand>
			    </Nav>
	  		</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;