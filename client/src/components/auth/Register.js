import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBInput, MDBBtn, MDBCardBody} from "mdbreact"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Register.css";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
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
const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
this.props.registerUser(newUser, this.props.history);   };
render() {
    const { errors } = this.state;
return (
  
      <div style={{marginTop:"6rem",marginRight:"1rem"}} className="container">
        
      
        <MDBContainer>
        <MDBRow>
          <MDBCol  md="7">
            <MDBCard style={{padding:"2rem"}}>
              <MDBCardBody>
                <form noValidate onSubmit={this.onSubmit}>
                  <p  className="h4 text-center indigo-text dark py-4">Sign up</p>
                  <div className="grey-text">
                  <span className="red-text">{errors.firstname}</span>
                    <MDBInput
                      label="First name"
                      icon="user"
                      iconClass="indigo-text"
                      onChange={this.onChange}
                      value={this.state.firstname}
                      error={errors.firstname}
                      id="firstname"
                      type="text"
                  
                      // className={classnames("", {
                      //   invalid: errors.firstname
                      // })}
                      
                    />
                    <span className="red-text">{errors.lastname}</span>
                    <MDBInput
                      label="Last name"
                      icon="user"
                      iconClass="indigo-text"
                      onChange={this.onChange}
                      value={this.state.lastname}
                      error={errors.lasttname}
                      id="lastname"
                      type="text"
                  
                      // className={classnames("", {
                      //   invalid: errors.lastname
                      // })}
                      
                    />
                    <span className="red-text">{errors.email}</span> 
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
                    <span className="red-text">{errors.password}</span> 
                    <MDBInput
                      label="Password"
                      icon="lock"
                      iconClass="indigo-text"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      
                      // className={classnames("", {
                      //   invalid: errors.password
                      // })}
                    />
                    <span className="red-text">{errors.password2}</span>
                    <MDBInput
                      label="Confirm Password"
                      icon="exclamation-triangle"
                      iconClass="indigo-text"
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      
                      // className={classnames("", {
                      //   invalid: errors.password2
                      // })}
                      
                    />
                  </div>
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn rounded color="indigo"   type="submit">
                      Register
                    </MDBBtn>
                  </div>
                  <p className="grey-text text-darken-1">
                    Already have an account? <Link className='indigo-text' to="/login">Log in</Link>
                  </p>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));