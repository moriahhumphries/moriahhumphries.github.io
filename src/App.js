import React from 'react';
import './App.css';
import Landing from "./Components/Landing";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Connect from "./Components/Connect";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function App() {
    return (

        <Router>
            <div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/connect">Connect</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Landing}>

                    </Route>
                    <Route path="/about" component={About}>

                    </Route>
                    <Route path="/projects" component={Projects}>

                    </Route>
                    <Route path="/skills" component={Skills}>

                    </Route>
                    <Route path="/connect" component={Connect}>

                    </Route>

                </Switch>
            </div>
        </Router>

    );
}


