import React from 'react';
import './App.css';
import Landing from "./Components/Landing";
import About from "./Components/About";
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
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Landing}>
                    </Route>
                    <Route path="/about" component={About}>

                    </Route>

                </Switch>
            </div>
        </Router>

    );
}


