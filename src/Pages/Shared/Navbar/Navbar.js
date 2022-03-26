import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-color">
                <div className="nav-container container-fluid width-control">
                    <NavLink className='nav-top-ancor' to="/"><span>Rent Vehical</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className='navbar-NavLink navbar-nav' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "rgb(255, 102, 0)" : ""
                                    };
                                }}
                                    to="/home"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='navbar-NavLink navbar-nav' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "rgb(255, 102, 0)" : ""
                                    };
                                }}
                                    to="/car"
                                >Rent car</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='navbar-NavLink navbar-nav' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "rgb(255, 102, 0)" : ""
                                    };
                                }}
                                    to="/bike"
                                >Rent bike</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='navbar-NavLink navbar-nav' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "rgb(255, 102, 0)" : ""
                                    };
                                }}
                                    to="/scooty"
                                >Rent scooty</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='navbar-NavLink navbar-nav' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "rgb(255, 102, 0)" : ""
                                    };
                                }}
                                    to="/contact"
                                >Contact us</NavLink>
                            </li>
                        </ul>
                        <button className="nav-login-btn hvr-sweep-to-bottom hvr-ripple-out">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

