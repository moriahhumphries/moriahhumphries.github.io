import React from "react";
import './../App.css';
import myphoto from "../imgs/profile-photo.png";
import logo from "../imgs/moriah-icon.jpg";

function About() {
    return (
        <div className="about center-align container">
            <h1>About me</h1>
            <div>
                <img src={myphoto} alt="myphoto" className="myphoto"/>
            </div>
            <p className="text">Hello, my name is Moriah Humphries and I am a Dallas-Fort Worth based
                Software Developer.
                <br/>
                <br/>
                I am currently attending a 20 week career accelerator program at <a href="https://codeup.com/"
                                                                                    target="_blank"
                                                                                    className="outside-link"
                >Codeup
                    Dallas.</a> I am currently seeking full time employment as a Software Developer.
                <br/>
                <br/>
                I am an avid knowledge collector, seeking to expand the ways humans adapt to and interface with
                the machines in their world.
                <br/>
                <br/>
                I am passionate about mechanical and software solutions that improve safety and quality of life
                for all. I believe in equitable access to the technology and training needed to assist workers
                with new skills as automation and software technology evolves.
            </p>
        </div>
    );
}


export default About;