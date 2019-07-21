import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { MDBNavbarBrand} from "mdbreact";
// import { BrowserRouter as Router} from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
  
  render() {
    const { user } = this.props.auth;
    console.log(user.firstname)
    return (
      <div style={{marginTop:"6rem",marginRight:"1rem"}} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome ,</b> {user.firstname}
              <p className="flow-text grey-text text-darken-1">
                You are logged into to {" "}
                <span style={{ fontFamily: "monospace" }}>DATABASE COURSEs</span>  👏
              </p>
            </h4>
            
          </div>
        </div>
       
        
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);