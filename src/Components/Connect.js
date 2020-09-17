import React from "react";
import './../App.css';

function Connect() {
    return (
        <div className="connect center-align container">
            <h1>Connect</h1>
            <ul className="center-align text">
                <li><i className="fas fa-envelope"></i><a
                    className="outside-link"
                    href="mailto:moriah.humphries@gmail.com?Subject=Let's%20connect!"
                    target="_top"
                > Email</a>
                </li>
                <br />
                <li><i className="fab fa-linkedin"></i><a
                    className="outside-link"
                    href="https://www.linkedin.com/in/moriah-humphries-126621b3/"
                    target="_blank">  LinkedIn</a></li>
                <br />
                <li><i className="fab fa-github-square"></i><a
                    className="outside-link"
                    href="https://github.com/moriahhumphries" target="_blank">  Github</a></li>
                <br />
                <li><i className="fas fa-user-graduate"></i><a href="https://alumni.codeup.com/students/823"
                                                                         target="_blank"
                                                                         className="outside-link">  Codeup Alumni
                    Profile</a></li>
                <br />
            </ul>
        </div>
    )
}

export default Connect;