import React from "react";

import './../App.css';
import hobbyist from "../imgs/hobbyistimage-min.png";
import pokemon from "../imgs/pokemonimage-min.png";
import continuity from "../imgs/continuity-min.png"
import dadlister from "../imgs/dadlister-min.png";
import movies from "../imgs/movies-app-min.png";
import weather from "../imgs/weatherimage-min.png";
import coffee from "../imgs/coffeeimage-min.png";
import personalsite from "../imgs/personal-site.png";


function Projects() {

    return (
        <div className="projects text center-align container text">
            <h1>Projects</h1>

            {/*Personal Site*/}
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={personalsite} alt="personal site"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Personal Site</span>
                            <p>This personal website was built with React, and utilizes React Router.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/moriahhumphries/moriahhumphries.github.io" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Hobbyist */}
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={hobbyist} alt="hobbyist"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Hobbyist</span>
                            <p>A full stack social application that allows users to discover new hobbies and keep track of their learning progress using the in-app hobby tracker feature. Utilizes Materialize, JS, jQuery, Java, MySQL, Spring Boot, and Thymeleaf.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://hobbyist-app.xyz/" target="_blank">View Live</a>
                            <br />
                            <a href="https://github.com/Hobbyist-Capstone/Hobbyist" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Pokemon*/}

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={pokemon} alt="pokemon"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Pokemon</span>
                            <p>This project was created in React, and utilizes the <a href="https://pokeapi.co/docs/v2" target="_blank">PokeAPI.</a> Users can search for Pokemon by name, and save their favorites to their local storage for later viewing.</p>
                        </div>
                        <div className="card-action">
                            <a href="https://sheltered-stream-83795.herokuapp.com/" target="_blank">View Live</a>
                            <br />
                            <a href="https://github.com/moriahhumphries/pokemon-app" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={continuity} alt="continuity"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Continuity</span>
                            <p>A full stack blog application that was created using Spring Boot, Thymeleaf, MySQL, and Bootstrap. The application allows users to register, create, edit and delete their posts.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://moriah-humphries.com/" target="_blank">View Live</a>
                            <br />
                            <a href="https://github.com/moriahhumphries/Spring" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*DadLister*/}

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={dadlister} alt="dadlister"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">DadLister</span>
                            <p>DadLister is a group project created to allow users to post questions that are best answered by a Dad figure in categories such as: BBQ Banter, Motor Moments, and Sports Stuff. This project uses JSPs, Servlets, JDBC, and MySQL.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/The-Tech-Warriors/DadLister" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Movies*/}

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={movies} alt="logo"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Movie App</span>
                            <p>A pair programming project that uses Javascript and a JavaScript JSON server to simulate an API. The user can add, edit, and delete the movies they submit.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/team-hailstorm/movies-application" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Weather*/}

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={weather} alt="weather"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Weather App</span>
                            <p>This project uses Javascript and two APIs: Mapbox and Open WeatherMap. The user's search will show new city and weather, and create a pin. The user can drag and drop the pin to update weather.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/moriahhumphries/weather-map" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Coffee*/}

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={coffee} alt="logo"/>

                        </div>
                        <div className="card-content">
                            <span className="card-title">Coffee App</span>
                            <p>This pair-programmed application uses Javascript and allows for the user to select their desired roast of coffee, and search by name.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/Moriah-and-DeLayne/coffee-project" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;