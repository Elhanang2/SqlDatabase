import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBMedia } from "mdbreact";
import Container from "../../../styling";
import Carousel from "./Carousel";
class About extends Component {
    state = {  }
    render() { 
        return ( 
          <Container>
            <Carousel/>
            <MDBRow className="mx-4 about-me">
              <MDBMedia className="about-heading" >
                <h2 className="mt-8 about-heading ">SCHOOL NAME </h2>
              </MDBMedia><br/><br/>
              
              <MDBCol sm="12" md="12" lg="12" className="about-text text-justify">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint excepturi 
                consectetur ab quibusdam debitis! Pariatur, aperiam? Quisquam autem accusamus dolorem, 
                nobis repellendus harum! Deserunt unde qui ipsum architecto! Quo dolores reiciendis deserunt 
                quisquam accusamus excepturi vero! Nemo magni, velit animi quibusdam delectus veniam ex. 
                Labore minus eligendi excepturi quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint excepturi 
                consectetur ab quibusdam debitis! Pariatur, aperiam? Quisquam autem accusamus dolorem, 
                nobis repellendus harum! Deserunt unde qui ipsum architecto! Quo dolores reiciendis deserunt 
                quisquam accusamus excepturi vero! Nemo magni, velit animi quibusdam delectus veniam ex. 
                Labore minus eligendi excepturi quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint excepturi 
                consectetur ab quibusdam debitis! Pariatur, aperiam? Quisquam autem accusamus dolorem, 
                nobis repellendus harum! Deserunt unde qui ipsum architecto! Quo dolores reiciendis deserunt 
                quisquam accusamus excepturi vero! Nemo magni, velit animi quibusdam delectus veniam ex. 
                Labore minus eligendi excepturi quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint excepturi 
                consectetur ab quibusdam debitis! Pariatur, aperiam? Quisquam autem accusamus dolorem, 
                nobis repellendus harum! Deserunt unde qui ipsum architecto! Quo dolores reiciendis deserunt 
                quisquam accusamus excepturi vero! Nemo magni, velit animi quibusdam delectus veniam ex. 
                Labore minus eligendi excepturi quos.</p>

                    
                <br></br>
                
              </MDBCol><br></br>
              
            </MDBRow>
            
            </Container>
          
         );
    }
}
 
export default About;