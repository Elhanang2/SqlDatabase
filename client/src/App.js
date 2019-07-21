import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/NavbarPage";
import Home from "./components/layout/Home/Home";
import About from "./components/layout/About/About";
import Courses from "./components/layout/Courses/Courses";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from  "./components/layout/Footer/Footer";
import Page1 from "./components/layout/Footer/Page1";
import Page2 from "./components/layout/Footer/Page2";
import Page3 from "./components/layout/Footer/Page3";
import Page4 from "./components/layout/Footer/Page4";
import "./App.css";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <div id= "appcontainer"  >
      <Provider store={store} >
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/page1" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/page3" component={Page3} />
            <Route exact path="/page4" component={Page4} />
            
         <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Footer />
          </div>

        </Router>
        
      </Provider>
      </div>
    );
  }
}
export default App;