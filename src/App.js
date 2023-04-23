import React from 'react';
import './css/main.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App view-width">

        <div className="sidebar">
            <div className="sidebar-logo-wrapper">
                <svg className="sidebar-logo" viewBox="0 0 501.89 165.95">
                    <line x1="82.97" y1="15" x2="82.97" y2="150.94"/>
                    <line x1="15" y1="82.97" x2="150.94" y2="82.97"/>
                    <line x1="194.4" y1="150.95" x2="296.97" y2="150.95"/>
                    <circle cx="418.92" cy="82.97" r="67.97"/>
                </svg>
            </div>
            <div className="sidebar-items">
                <div className="sidebar-items-top">
                    <ul className="sidebar-items-top-list">
                        <li className="sidebar-items-top-list-item">
                            <NavLink className="sidebar-items-top-list-item-link" to="/">
                                Store
                            </NavLink>
                        </li>
                        <li className="sidebar-items-top-list-item">
                            <NavLink className="sidebar-items-top-list-item-link" to="/library">
                                Library
                            </NavLink>
                        </li>
                        <li className="sidebar-items-top-list-item">
                            <NavLink className="sidebar-items-top-list-item-link" to="/favorites">
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-items-bottom">
                    <ul className="sidebar-items-bottom-list">
                        <li className="sidebar-items-bottom-list-item">
                            <NavLink className="sidebar-items-bottom-list-item-link" to="/settings">
                                Settings
                            </NavLink>
                        </li>
                        <li className="sidebar-items-bottom-list-item">
                            <NavLink className="sidebar-items-bottom-list-item-link" to="/help">
                                Help
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="content">
            <nav className="navbar">
                <div className="navbar-left">
                    <form className="navbar-left-search">
                        <svg className="navbar-left-search-icon" width="24px" height="24px" viewBox="0 0 24 24">
                            <title>Search</title>
                            <g id="search-outer">
                                <g id="search" transform="translate(2.000000, 2.000000)">
                                    <path d="M9.27542857,0.714285714 C14.0030476,0.714285714 17.836381,4.54666667 17.836381,9.2752381 C17.836381,14.0038095 14.0030476,17.8361905 9.27542857,17.8361905 C4.54685714,17.8361905 0.71447619,14.0038095 0.71447619,9.2752381 C0.71447619,4.54666667 4.54685714,0.714285714 9.27542857,0.714285714 Z" id="Stroke-1"/>
                                    <path d="M17.8989524,16.487619 C18.678,16.487619 19.3094286,17.12 19.3094286,17.8980952 C19.3094286,18.6780952 18.678,19.3095238 17.8989524,19.3095238 C17.1199048,19.3095238 16.4875238,18.6780952 16.4875238,17.8980952 C16.4875238,17.12 17.1199048,16.487619 17.8989524,16.487619 Z" id="Stroke-3"/>
                                </g>
                            </g>
                        </svg>
                        <input className="navbar-left-search-input" placeholder="Search" />
                    </form>
                </div>
                <div className="navbar-right">
                    <div className="navbar-right-items">
                        <div className="navbar-right-items-button">
                            <svg className="navbar-right-items-button-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <title>Notification</title>
                                <g id="notification-outer">
                                    <g id="notification" transform="translate(4.614552, 2.514190)">
                                        <path d="M7.38163814,2.84217094e-14 C2.94735243,2.84217094e-14 1.02068576,4.0152381 1.02068576,6.66952381 C1.02068576,8.65333333 1.30830481,8.06952381 0.210209572,10.4895238 C-1.13074281,13.9380952 4.26163814,15.347619 7.38163814,15.347619 C10.5006858,15.347619 15.8930667,13.9380952 14.5530667,10.4895238 C13.4549715,8.06952381 13.7425905,8.65333333 13.7425905,6.66952381 C13.7425905,4.0152381 11.8149715,2.84217094e-14 7.38163814,2.84217094e-14 Z" id="Stroke-1"/>
                                        <path d="M9.691448,17.998 C8.39716229,19.4437143 6.37811467,19.4608571 5.071448,17.998" id="Stroke-3"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="navbar-right-items-button">
                            <svg className="navbar-right-items-button-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <title>Bag</title>
                                <g id="bag-outer">
                                    <g id="bag" transform="translate(2.950000, 2.649693)">
                                        <path d="M12.7999111,6.82200709 L12.7999111,3.79000709 C12.8049,1.70200709 11.1159,0.00500709014 9.0279,3.55271368e-15 C6.9389,-0.00399290986 5.2429,1.68500709 5.2379,3.77300709 L5.2379,6.82200709" id="Stroke-1"/>
                                        <path d="M5.32907052e-15,11.557807 C5.32907052e-15,6.263807 2.255,4.498807 9.019,4.498807 C15.783,4.498807 18.038,6.263807 18.038,11.557807 C18.038,16.850807 15.783,18.615807 9.019,18.615807 C2.255,18.615807 5.32907052e-15,16.850807 5.32907052e-15,11.557807 Z" id="Stroke-3"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="navbar-right-items-profile">
                            <div className="navbar-right-items-profile-picture">
                                <img className="navbar-right-items-profile-picture-inner" src="https://images.unsplash.com/photo-1628155090368-c65ef1293bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="" />
                            </div>
                            <p className="navbar-right-items-profile-name">Username</p>
                            <svg className="navbar-right-items-profile-arrow" viewBox="0 0 9.49 5.14">
                                <path d="m1,1l3.74,3.14,3.74-3.14"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>

        </div>
        <div className="c-blurred-blue"></div>
        <div className="c-blurred-red"></div>
    </div>
  );
}

export default App;
