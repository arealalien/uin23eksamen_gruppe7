import React from 'react';
import './css/main.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MyGames from "./components/MyGames";
import MyFavorites from "./components/MyFavorites";
import GamePage from "./components/GamePage";

function App() {
  return (
    <div className="App view-width">

        <div className="space-container"></div>
        <div className="sidebar">
            <div className="sidebar-logo-wrapper">
                <NavLink to="/">
                    <svg className="sidebar-logo" viewBox="0 0 501.89 165.95">
                        <line x1="82.97" y1="15" x2="82.97" y2="150.94"/>
                        <line x1="15" y1="82.97" x2="150.94" y2="82.97"/>
                        <line x1="194.4" y1="150.95" x2="296.97" y2="150.95"/>
                        <circle cx="418.92" cy="82.97" r="67.97"/>
                    </svg>
                </NavLink>
            </div>
            <div className="sidebar-items">
                <div className="sidebar-items-top">
                    <ul className="sidebar-items-top-list">
                        <li className="sidebar-items-top-list-item">
                            <NavLink className="sidebar-items-top-list-item-link" to="/">
                                <svg className="sidebar-items-top-list-item-link-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <title>Bag</title>
                                    <g id="bag-outer">
                                        <g id="bag" transform="translate(2.950000, 2.649693)">
                                            <path d="M12.7999111,6.82200709 L12.7999111,3.79000709 C12.8049,1.70200709 11.1159,0.00500709014 9.0279,3.55271368e-15 C6.9389,-0.00399290986 5.2429,1.68500709 5.2379,3.77300709 L5.2379,6.82200709" id="Stroke-1"/>
                                            <path d="M5.32907052e-15,11.557807 C5.32907052e-15,6.263807 2.255,4.498807 9.019,4.498807 C15.783,4.498807 18.038,6.263807 18.038,11.557807 C18.038,16.850807 15.783,18.615807 9.019,18.615807 C2.255,18.615807 5.32907052e-15,16.850807 5.32907052e-15,11.557807 Z" id="Stroke-3"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>
                                    Store
                                </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-items-top-list-item">
                            <NavLink className="sidebar-items-top-list-item-link" to="/library">
                                <svg className="sidebar-items-top-list-item-link-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <title>Folder</title>
                                    <g id="folder-outer">
                                        <g id="folder" transform="translate(2.500000, 2.500000)">
                                            <line x1="4.8057" y1="12.0742685" x2="14.3987" y2="12.0742685" id="Stroke-1"/>
                                            <path d="M-1.13686838e-13,5.29836453 C-1.13686838e-13,2.85645977 1.25,0.75931691 3.622,0.272650243 C5.993,-0.214968804 7.795,-0.0463973758 9.292,0.761221672 C10.79,1.56884072 10.361,2.76122167 11.9,3.63645977 C13.44,4.51265024 15.917,3.19645977 17.535,4.94217405 C19.229,6.7697931 19.2200005,9.57550739 19.2200005,11.3640788 C19.2200005,18.1602693 15.413,18.6993169 9.61,18.6993169 C3.807,18.6993169 -1.13686838e-13,18.2288407 -1.13686838e-13,11.3640788 L-1.13686838e-13,5.29836453 Z" id="Stroke-2"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>
                                    Library
                                </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-items-top-list-item">
                            <NavLink className="sidebar-items-top-list-item-link" to="/favorites">
                                <svg className="sidebar-items-top-list-item-link-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <title>Heart</title>
                                    <g id="heart-outer">
                                        <g id="heart" transform="translate(2.550170, 3.550158)">
                                            <path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z" id="Stroke-1"/>
                                            <path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842" id="Stroke-3"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>
                                    Favorites
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-items-bottom">
                    <ul className="sidebar-items-bottom-list">
                        <li className="sidebar-items-bottom-list-item">
                            <NavLink className="sidebar-items-bottom-list-item-link" to="/settings">
                                <svg className="sidebar-items-bottom-list-item-link-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <title>Setting</title>
                                    <g id="setting-outer">
                                        <g id="setting" transform="translate(3.500000, 2.500000)">
                                            <path d="M8.5,7 C9.88088012,7 11,8.11911988 11,9.5 C11,10.8808801 9.88088012,12 8.5,12 C7.11911988,12 6,10.8808801 6,9.5 C6,8.11911988 7.11911988,7 8.5,7 Z" id="Stroke-1"/>
                                            <path d="M16.6680023,4.75024695 L16.6680023,4.75024695 C15.9844554,3.55799324 14.4712377,3.15003899 13.2885153,3.83852352 C12.2597626,4.43613205 10.9740669,3.68838056 10.9740669,2.49217572 C10.9740669,1.11619444 9.86587758,0 8.4997646,0 L8.4997646,0 C7.13365161,0 6.02546233,1.11619444 6.02546233,2.49217572 C6.02546233,3.68838056 4.73976662,4.43613205 3.71199461,3.83852352 C2.52829154,3.15003899 1.01507378,3.55799324 0.331526939,4.75024695 C-0.351039204,5.94250065 0.053989269,7.46664934 1.23769234,8.15414609 C2.26546435,8.7527424 2.26546435,10.2472576 1.23769234,10.8458539 C0.053989269,11.5343384 -0.351039204,13.0584871 0.331526939,14.2497531 C1.01507378,15.4420068 2.52829154,15.849961 3.71101391,15.1624643 L3.71199461,15.1624643 C4.73976662,14.5638679 6.02546233,15.3116194 6.02546233,16.5078243 L6.02546233,16.5078243 C6.02546233,17.8838056 7.13365161,19 8.4997646,19 L8.4997646,19 C9.86587758,19 10.9740669,17.8838056 10.9740669,16.5078243 L10.9740669,16.5078243 C10.9740669,15.3116194 12.2597626,14.5638679 13.2885153,15.1624643 C14.4712377,15.849961 15.9844554,15.4420068 16.6680023,14.2497531 C17.3515491,13.0584871 16.9455399,11.5343384 15.7628176,10.8458539 L15.7618369,10.8458539 C14.7340648,10.2472576 14.7340648,8.7527424 15.7628176,8.15414609 C16.9455399,7.46664934 17.3515491,5.94250065 16.6680023,4.75024695 Z" id="Stroke-3"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>
                                    Settings
                                </span>
                            </NavLink>
                        </li>
                        <li className="sidebar-items-bottom-list-item">
                            <NavLink className="sidebar-items-bottom-list-item-link" to="/help">
                                <svg className="sidebar-items-bottom-list-item-link-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <title>Message</title>
                                    <g id="message-outer">
                                        <g id="message" transform="translate(2.452080, 2.851980)">
                                            <path d="M15.0928322,6.167017 C15.0928322,6.167017 11.8828071,10.0196486 9.53493746,10.0196486 C7.18807029,10.0196486 3.941955,6.167017 3.941955,6.167017" id="Stroke-1"/>
                                            <path d="M1.04805054e-13,9.11679198 C1.04805054e-13,2.27869674 2.38095238,8.8817842e-15 9.52380952,8.8817842e-15 C16.6666667,8.8817842e-15 19.047619,2.27869674 19.047619,9.11679198 C19.047619,15.9538847 16.6666667,18.233584 9.52380952,18.233584 C2.38095238,18.233584 1.04805054e-13,15.9538847 1.04805054e-13,9.11679198 Z" id="Stroke-3"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>
                                    Help
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="content">
            <nav className="navbar">
                <div className="navbar-button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
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
                        <NavLink className="navbar-right-items-button" to="/">
                            <svg className="navbar-right-items-button-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <title>Notification</title>
                                <g id="notification-outer">
                                    <g id="notification" transform="translate(4.614552, 2.514190)">
                                        <path d="M7.38163814,2.84217094e-14 C2.94735243,2.84217094e-14 1.02068576,4.0152381 1.02068576,6.66952381 C1.02068576,8.65333333 1.30830481,8.06952381 0.210209572,10.4895238 C-1.13074281,13.9380952 4.26163814,15.347619 7.38163814,15.347619 C10.5006858,15.347619 15.8930667,13.9380952 14.5530667,10.4895238 C13.4549715,8.06952381 13.7425905,8.65333333 13.7425905,6.66952381 C13.7425905,4.0152381 11.8149715,2.84217094e-14 7.38163814,2.84217094e-14 Z" id="Stroke-1"/>
                                        <path d="M9.691448,17.998 C8.39716229,19.4437143 6.37811467,19.4608571 5.071448,17.998" id="Stroke-3"/>
                                    </g>
                                </g>
                            </svg>
                        </NavLink>
                        <NavLink className="navbar-right-items-button" to="/">
                            <svg className="navbar-right-items-button-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <title>Bag</title>
                                <g id="bag-outer">
                                    <g id="bag" transform="translate(2.950000, 2.649693)">
                                        <path d="M12.7999111,6.82200709 L12.7999111,3.79000709 C12.8049,1.70200709 11.1159,0.00500709014 9.0279,3.55271368e-15 C6.9389,-0.00399290986 5.2429,1.68500709 5.2379,3.77300709 L5.2379,6.82200709" id="Stroke-1"/>
                                        <path d="M5.32907052e-15,11.557807 C5.32907052e-15,6.263807 2.255,4.498807 9.019,4.498807 C15.783,4.498807 18.038,6.263807 18.038,11.557807 C18.038,16.850807 15.783,18.615807 9.019,18.615807 C2.255,18.615807 5.32907052e-15,16.850807 5.32907052e-15,11.557807 Z" id="Stroke-3"/>
                                    </g>
                                </g>
                            </svg>
                        </NavLink>
                        <NavLink className="navbar-right-items-profile" to="/">
                            <div className="navbar-right-items-profile-picture">
                                <img className="navbar-right-items-profile-picture-inner" src="https://images.unsplash.com/photo-1628155090368-c65ef1293bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="" />
                            </div>
                            <div className="navbar-right-items-profile-name">
                                <p className="navbar-right-items-profile-name-text">Username</p>
                            </div>
                            <svg className="navbar-right-items-profile-arrow" viewBox="0 0 9.49 5.14">
                                <path d="m1,1l3.74,3.14,3.74-3.14"/>
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/library" element={<MyGames/>}/>
                <Route path="/favorites" element={<MyFavorites/>}/>
                <Route path="/game/:gameName" element={<GamePage/>}/>
            </Routes>

            <footer className="footer">
                <a className="footer-link" href="https://rawg.io/apidocs" target="_blank">rawg.io</a>
            </footer>

        </div>
        <div className="c-blurred-blue"></div>
    </div>
  );
}

export default App;

