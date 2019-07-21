import React, { Component } from 'react';
import Container from "../../../styling"

class Courses extends Component {
    state = { 

     }
    render() { 
        return ( 
            <Container>
                  <h2 >Full stack Courses</h2>
                
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>Ajax</li>
                  <li>React</li>
                  <li>MySql</li>
                  <li>Mongodb</li>
                  <li>Nodejs</li>
                  <li>APIs</li>
                  <li>JSON</li>
                </ul>
              </Container>
         );
    }
}
 
export default Courses;