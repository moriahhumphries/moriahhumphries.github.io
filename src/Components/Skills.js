import React from "react";
import './../App.css';

function Skills() {
    return (
        <div className="skills text center-align container">
            <h1>Skills</h1>
            <ul>
                <li><i className="fab fa-html5 mr-2"></i>HTML</li>
                <li><i className="fab fa-css3-alt mr-2"></i>CSS</li>
                <li><i className="fab fa-bootstrap mr-2"></i>BootStrap</li>
                <li><i className="fab fa-js-square mr-2"></i>JavaScript</li>
                <li><i className="fas fa-dollar-sign mr-2"></i>jQuery</li>
                <li><i className="far fa-object-group mr-2"></i>Object-Oriented Programming</li>
                <li><i className="fab fa-java mr-2"></i>Java SE</li>
                <li><i className="fab fa-java mr-2"></i>Java EE (Servlets, JSP)</li>
                <li><i className="fas fa-leaf mr-2"></i>Spring Boot Framework</li>
                <li><i className="fas fa-database mr-2"></i>MySQL</li>
                <li><i className="fab fa-pagelines mr-2"></i>Thymeleaf</li>
                <li><i className="fas fa-vial mr-2"></i>Test-Driven Development</li>
                <li><i className="fas fa-user-friends mr-2"></i>Paired Programming</li>
                <li><i className="fab fa-github-square mr-2"></i>VCS with Git</li>
            </ul>
        </div>
    )
}

export default Skills;