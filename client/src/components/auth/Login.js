import React, { Component } from "react";
import { Link } from "react-router-dom";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Register.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Container from "../../styling";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
render() {
    const { errors } = this.state;
return (
      // <div style={{marginTop:"6rem",marginRight:"1rem"}} className="container">
      <Container> 
        <MDBContainer>
        <MDBRow>
          <MDBCol md="7" sm="12">
            <MDBCard style={{padding:"2rem"}}>
              <MDBCardBody>
                <form noValidate onSubmit={this.onSubmit}>
                  <p  className="h4 text-center indigo-text dark py-4">Login</p>
                  <p className="grey-text text-darken-1">
                    Don't have an account? <Link className='indigo-text dark' to="/register">Register</Link>
                  </p>
                  <div className="grey-text">
                    
                  <span className="red-text">{errors.email} {errors.emailnotfound} </span> 
                   
                     <MDBInput
                      label="Email"
                      icon="envelope"
                      iconClass="indigo-text"                  
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      
                      // className={classnames("", {
                      //   invalid: errors.email
                      // })}
                      
                    />
                  
                    <span className="red-text">{errors.password} {errors.passwordincorrect} </span> 
                    
                    <MDBInput
                      label="Password"
                      icon="lock"
                      iconClass="indigo-text"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      
                    />
                    
                  </div>
                  <div className="text-center  mb-3 col-md-12">
                    <MDBBtn color="indigo white-text"  type="submit">
                      Login
                    </MDBBtn>
                  </div>
                  
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </Container>
      //  </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);