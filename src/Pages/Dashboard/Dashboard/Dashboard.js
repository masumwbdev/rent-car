import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="">
                <div className='nasted-container'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <h3>Dashobard</h3>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <div className="nasted-li">
                                        <li class="nav-item">
                                            <NavLink className='hvr-underline-from-center navbar-NavLink nasted-nav' style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "white" : "",
                                                    backgroundColor: isActive ? "#3749BB" : ""
                                                }
                                            }}
                                                to="/dashboard/dashboardHome"
                                            >Dashboard Home</NavLink>
                                        </li>
                                    </div>
                                    <div className="nasted-li">
                                        <li class="nav-item">
                                            <NavLink className='hvr-underline-from-center navbar-NavLink nasted-nav' style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "white" : "",
                                                    backgroundColor: isActive ? "#3749BB" : ""
                                                }
                                            }}
                                                to="/dashboard/myOrders"
                                            >My orders</NavLink>
                                        </li>
                                    </div>
                                    <div className="nasted-li">
                                        <li class="nav-item">
                                            <NavLink className='hvr-underline-from-center navbar-NavLink nasted-nav' style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "white" : "",
                                                    backgroundColor: isActive ? "#3749BB" : ""
                                                }
                                            }}
                                                to="/dashboard/makeAdmin"
                                            >Make admin</NavLink>
                                        </li>
                                    </div>
                                    <div className="nasted-li">
                                        <li class="nav-item">
                                            <NavLink className='hvr-underline-from-center navbar-NavLink nasted-nav' style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "white" : "",
                                                    backgroundColor: isActive ? "#3749BB" : ""
                                                }
                                            }}
                                                to="/dashboard/addProducts"
                                            >Add products</NavLink>
                                        </li>
                                    </div>
                                    <div className="nasted-li">
                                        <li class="nav-item">
                                            <NavLink className='hvr-underline-from-center navbar-NavLink nasted-nav' style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "white" : "",
                                                    backgroundColor: isActive ? "#3749BB" : ""
                                                }
                                            }}
                                                to="/dashboard/giveReview"
                                            >Give review</NavLink>
                                        </li>
                                    </div>
                                    <div className="nasted-li">
                                        <li class="nav-item">
                                            <NavLink className='hvr-underline-from-center navbar-NavLink nasted-nav' style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "white" : "",
                                                    backgroundColor: isActive ? "#3749BB" : ""
                                                }
                                            }}
                                                to="/home"
                                            >Back to home</NavLink>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;