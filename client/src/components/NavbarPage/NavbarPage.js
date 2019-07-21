import React from 'react';
import "./NavbarPage.css";
import PropTypes from "prop-types";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import {  logoutUser } from "../../actions/authActions";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogout: true,
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  componentDidMount(){
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.setState({
      userLogout: false
    })
  };
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const { user} = this.props.auth;
    return (
      <div id="appcontainer">
        <header >
          <Router>
            <MDBNavbar  id="appcontainer" className="navbar-default " color="indigo darken-4" fixed="top" dark expand="md" scrolling >
              <MDBNavbarBrand to="/">
                <strong > <a style={{color:"white",fontSize:"26px"}}  href="#home">Logo</a></strong>

              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavbarBrand  to="/home" >
                    <a  style={{color:"white"}} href="/">Home</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand  to="/" >
                    <a  style={{color:"white"}} href="/about">About</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand  to="/courses">
                  <a  style={{color:"white"}} href="/courses">courses</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand  to="/dashboard">
                  <a  style={{color:"white"}} href="/dashboard">course detail</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand  to="/contact">
                    <a style={{color:"white"}}  href="/contact">Contact</a>
                  </MDBNavbarBrand>
                  
    
                </MDBNavbarNav>
                <MDBNavbarNav right>
                {user.firstname ?
                               
                    <div>
                    <MDBNavbarBrand  to="#">
                      {user.firstname}
                    </MDBNavbarBrand>
                    <MDBNavbarBrand  to="/about">
                      <a style={{color:"white"}} href="/about" onClick={this.onLogoutClick}>{this.state.userLogout && <p>Logout</p>} </a>
                    </MDBNavbarBrand>
                    </div>
                    :
                    <React.Fragment>
                  <MDBNavbarBrand  to="/register">
                    <a style={{color:"white"}} href="/register">Register</a>
                  </MDBNavbarBrand>
                  
                  <MDBNavbarBrand  to="/login">
                    <a style={{color:"white"}} href="/login">Login</a>
                  </MDBNavbarBrand>
                  </React.Fragment>
                    
                }
                
                </MDBNavbarNav>

              </MDBCollapse>
            </MDBNavbar>
          </Router> 
        </header>
        
      </div>
    );
  }
}
NavbarPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  
};
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(NavbarPage);