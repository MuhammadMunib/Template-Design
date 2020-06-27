import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

 export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }


      componentDidMount() {
        $(document).ready(function(){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if (scroll > 300) {
                  $(".navshow").css("background" , "black");
                }
          
                else{
                    $(".navshow").css("background" , "transparent");  	
                }
            })
          })
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
     

      

    render() {
        
        return(
            <div>
                <Navbar dark expand="md" className="navshow fixed-top">
                    <div className="container">
                        <NavbarToggler style={{float:'right'}} onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto nav-brand" href="/">Deluxe</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link n-active"  to='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'>Rooms</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'>Resturants</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'>Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'>Contact</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}