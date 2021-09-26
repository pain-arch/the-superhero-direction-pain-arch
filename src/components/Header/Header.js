import React from 'react';
import logo from '../Assets/logo.png';
import banner from '../Assets/header-top.jpg';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active fs-5" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fs-5" href="/features">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fs-5" href="/login">Login</a>
                        </li>
                    </ul>
                    </div>
                    <h2 className="ml-3 budget fs-2">Total Budget 100 Million Dollar for movie</h2>
                </div>
            </nav>
            <div className="banner">
                <img className="img-fluid" src={banner} alt="banner" />
            </div>          
        </div>
    );
};

export default Header;