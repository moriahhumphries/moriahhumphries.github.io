import React from "react";
import './../App.css';

function Skills() {
    return (
        <div className="skills text center-align container">
            <h1>Skills</h1>
            <ul>
                <li><i className="fab fa-html5"></i>  HTML</li>
                <li><i className="fab fa-css3-alt"></i>  CSS</li>
                <li><i className="fab fa-bootstrap"></i>  BootStrap</li>
                <li><i className="fab fa-js-square"></i>  JavaScript</li>
                <li><i className="fab fa-react"></i>  React</li>
                <li><i className="fas fa-dollar-sign"></i>  jQuery</li>
                <li><i className="far fa-object-group"></i>  Object-Oriented Programming</li>
                <li><i className="fab fa-java"></i>  Java SE</li>
                <li><i className="fab fa-java"></i>  Java EE (Servlets, JSP)</li>
                <li><i className="fas fa-leaf"></i>  Spring Boot Framework</li>
                <li><i className="fas fa-database"></i>  MySQL</li>
                <li><i className="fab fa-pagelines"></i>  Thymeleaf</li>
                <li><i className="fas fa-vial"></i>  Test-Driven Development</li>
                <li><i className="fas fa-user-friends"></i>  Paired Programming</li>
                <li><i className="fab fa-github-square"></i>  VCS with Git</li>
            </ul>
        </div>
    )
}

export default Skills;