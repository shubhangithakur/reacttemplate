import React, { Component } from 'react';
import { Image} from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import  './HeaderComponent.css';
import SearchComponent from '../SearchComponent/search.js'

class HeaderComponent extends Component {
 
  render(){

    return (
      <Navbar>
         <Navbar.Header>

           <Navbar.Brand className="navbar">
            <Image src="./assets/shopping-bag-16.ico"/>
            <a href="#home">NeoSTORE</a>
           </Navbar.Brand>

           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
         <Nav>
           <NavItem href="#">
             Home
           </NavItem>
         </Nav>
         <Navbar.Form pullLeft>
        <SearchComponent></SearchComponent>
         </Navbar.Form>
         <Nav pullRight>
           <NavItem eventKey={1} href="#">
             <i className="fa fa-shopping-bag fa-lg"></i>&nbsp;&nbsp;<span>Cart</span>&nbsp;&nbsp;<span className="badge"></span>
           </NavItem>
           <NavDropdown eventKey={3} title={<span><i className="fa fa-user fa-fw"></i></span>} id="basic-nav-dropdown">
             <MenuItem eventKey={3.1}><i className="fa fa-sign-in fa-fw"></i> Login</MenuItem>
             <MenuItem eventKey={3.2}><i className="fa fa-user-plus fa-fw"></i> NewUser</MenuItem>
           </NavDropdown>
         </Nav>
         </Navbar.Collapse>
       </Navbar>

    );
  }
}

export default HeaderComponent
