import React from "react";

import './../App.css';
import logo from "../imgs/moriah-icon.jpg";
import hobbyist from "../imgs/hobbyistimage.png";
import pokemon from "../imgs/pokemonimage.png";
import continuity from "../imgs/continuity.png"
import dadlister from "../imgs/dadlister.png";
import movies from "../imgs/movies-app.png";
import weather from "../imgs/weatherimage.png";
import coffee from "../imgs/coffeeimage.png";


function Projects() {

    return (
        <div className="projects text center-align container text">
            <h1>Projects</h1>

            {/*Hobbyist */}
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={hobbyist} alt="hobbyist"/>
                            <span className="card-title">Hobbyist</span>
                        </div>
                        <div className="card-content">
                            <p>Hobbyist</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
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
                            <span className="card-title">Pokemon</span>
                        </div>
                        <div className="card-content">
                            <p>Pokemon</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img src={continuity} alt="continuity"/>
                            <span className="card-title">Continuity</span>
                        </div>
                        <div className="card-content">
                            <p>Continuity</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
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
                            <span className="card-title">DadListers</span>
                        </div>
                        <div className="card-content">
                            <p>DadLister</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
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
                            <span className="card-title">Movies</span>
                        </div>
                        <div className="card-content">
                            <p>Movies</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
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
                            <span className="card-title">Weather</span>
                        </div>
                        <div className="card-content">
                            <p>Weather</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
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
                            <span className="card-title">Coffee Project</span>
                        </div>
                        <div className="card-content">
                            <p>Coffee Project.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Projects;