import React from "react";
import './../App.css';

function Connect() {
    return (
        <div className="connect center-align container">
            <h1>Connect</h1>
            <ul className="center-align text">
                <li><i className="fab fa-linkedin mr-2 mt-5"></i><a
                    href="https://www.linkedin.com/in/moriah-humphries-126621b3/"
                    target="_blank">LinkedIn</a></li>

                <li><i className="fas fa-envelope mr-2 mt-3"></i><a
                    href="mailto:moriah.humphries@gmail.com?Subject=Let's%20connect!"
                    target="_top">moriah.humphries@gmail.com</a>
                </li>
                <li><i className="fab fa-github-square mr-2 mt-3"></i><a
                    href="https://github.com/moriahhumphries" target="_blank">Github</a></li>
                <li><i className="fas fa-user-graduate mr-2 mt-3"></i><a href="https://alumni.codeup.com/students/823"
                                                                         target="_blank"
                                                                         className="contact-link">Codeup Alumni
                    Profile</a></li>
            </ul>
        </div>
    )
}

export default Connect;