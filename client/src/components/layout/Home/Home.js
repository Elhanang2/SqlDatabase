import React, { Component } from 'react';
// import "./Home.css"
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
                <div className="homecontainer" style={{width: "100%", backgroundColor: "#0d47a1", background: "linear-gradient(176deg, #0d47a1 70%, #1a237e calc(70% + 2px))", height:"75vh", borderBottomRightRadius: "10rem" }}>
                    <h1 style={{color: "white", textAlign: "center", paddingTop: "6rem"}}>Sql database online training</h1>
                </div>
                <div style={{width: "100%", height: "500px"}}>
                 <h1>Something about the course</h1>
                </div>
            </div>
         );
    }
}
 
export default Home;