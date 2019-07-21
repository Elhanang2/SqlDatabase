import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBListGroup } from "mdbreact";
import {Link} from 'react-router-dom'
// import Page1 from "./Page1"

const FooterPage = () => {
  return (
    <MDBFooter style={{  width: "100%"}} color="unique-color-dark" className="font-small pt-4 ">
      <MDBContainer  className="text-center text-md-left">
        <MDBRow className="d-flex justify-coontent-around">
          <MDBCol md="4">
            <h5 className="title">Footer Content</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil obcaecati modi architecto consequuntur veritatis maxime dicta quibusdam voluptatem vitae! Necessitatibus doloremque vero porro, nulla non maxime est id ducimus.</p>

          </MDBCol>
          <MDBCol md="3">
            <h5 className="title text-lg-left">Links</h5>
            <ul>
              <MDBListGroup to="/page1" >
                <a href="/page1">PAGE 1</a>
              </MDBListGroup>
              <MDBListGroup to="/page2" >
                <a href="/page2">PAGE 2</a>
              </MDBListGroup>
              <MDBListGroup to="/page1" >
                <a href="/page3">PAGE 3</a>
              </MDBListGroup>
              <MDBListGroup to="/page4"  >
                <a href="/page4">PAGE 4</a>
              </MDBListGroup>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Links</h5>
            <ul>
              <MDBListGroup to="/page1" >
              <a href="/page1">PAGE 1</a>
              </MDBListGroup>
              <MDBListGroup to="/page2" >
                <a href="/page2">PAGE 2</a>
              </MDBListGroup>
              <MDBListGroup to="/page1" >
                <a href="/page3">PAGE 3</a>
              </MDBListGroup>
              <MDBListGroup to="/page4"  >
                <a href="/page4">PAGE 4</a>
              </MDBListGroup>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> sami@Database </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;