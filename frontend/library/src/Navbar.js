import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl} from 'react-bootstrap'
import './Navbar.css'

const Navigation = () => {

	return (
		<Navbar inverse collapseOnSelect fixedTop>
	  		<Navbar.Header>
	    		<Navbar.Brand>
	      			<a href="#brand">
	      				<img className="sricity" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/IIIT_Sri_City_Logo.png/220px-IIIT_Sri_City_Logo.png"  />
	      				Project B-02
	      			</a>

	    		</Navbar.Brand>
	    		<Navbar.Toggle />
	 		</Navbar.Header>
	  		<Navbar.Collapse>
			    <Nav>
			      	<NavItem eventKey={1} href="#">
			        	Link
			      	</NavItem>
			      	<NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
			        	<MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>
			      	</NavDropdown>
			      	
				    <Navbar.Form pullLeft>
				     	<FormGroup>
				    		<FormControl type="text" placeholder="Search" />
				    	</FormGroup>{' '}
				    </Navbar.Form>
				    <NavItem eventKey={2} href="#">
			       		Link
			      	</NavItem>
			    </Nav>
			    <Nav pullRight>
			    	<NavDropdown eventKey={3} 
			    		title={ <span>
			    				<i class="fa fa-user"></i> Welcome, User!
			    			</span>
			    		} 
			    		id="basic-nav-dropdown">
			        	<MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>
			      	</NavDropdown>
			    	<NavItem eventKey={2} href="#">
			    		<i class="fa fa-user-times"></i> Logout
			    	</NavItem>
			    </Nav>
	  		</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;