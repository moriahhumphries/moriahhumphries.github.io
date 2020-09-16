import React from "react";
import './../App.css';
import logo from "../imgs/moriah-icon.jpg";
import {Link} from "react-router-dom";


function Landing() {
    return (
        <div className="landing container">
            {/*Large*/}
            <h1 style={{"fontSize": "10vw", "marginBottom": "0"}} className="hide-on-med-and-down show-on-large moriah left-align">Moriah</h1>
            <h1 style={{"fontSize": "10vw", "marginTop": "0"}} className="hide-on-med-and-down show-on-large humphries right-align">Humphries.</h1>
            <h3 style={{"fontSize": "3vw", "display" : "inlineBlock"}} className="hide-on-med-and-down show-on-large right-align dev">a software developer.</h3>


        <div className="center-align hide-on-large-only">
            {/*Small*/}
            <h1 style={{"fontSize": "15vw", "marginBottom": "0"}} className="hide-on-large-only">Moriah</h1>
            <h1 style={{"fontSize": "15vw", "marginTop": "0"}} className="hide-on-large-only">Humphries.</h1>
            <img src={logo} alt="logo" className="logo-large hide-on-med-and-up center-align"/>
            <h3 style={{"fontSize": "10vw", "marginTop": "-20px"}} className="hide-on-large-only">a software developer.</h3>
        </div>
        </div>
    )
}

export default Landing;