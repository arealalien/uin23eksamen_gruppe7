import './css/main.css';

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
                        <li className="sidebar-items-top-list-item"><a className="sidebar-items-top-list-item-link">Store</a></li>
                        <li className="sidebar-items-top-list-item"><a className="sidebar-items-top-list-item-link">Library</a></li>
                        <li className="sidebar-items-top-list-item"><a className="sidebar-items-top-list-item-link">Favorites</a></li>
                    </ul>
                </div>
                <div className="sidebar-items-bottom">
                    <ul className="sidebar-items-bottom-list">
                        <li className="sidebar-items-bottom-list-item"><a className="sidebar-items-top-list-item-link">Settings</a></li>
                        <li className="sidebar-items-bottom-list-item"><a className="sidebar-items-top-list-item-link">Help</a></li>
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
                        <div className="navbar-right-items-button"></div>
                        <div className="navbar-right-items-button"></div>
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

            <main className="main">
                <header className="header">
                    <div className="header-left">
                        <div className="header-left-wrapper">
                            <div className="header-left-wrapper-background">
                                <img className="header-left-wrapper-background-image" src="https://images.unsplash.com/photo-1667818139461-7772a11554f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-right-wrapper">
                            <div className="header-right-wrapper-background">
                                <img className="header-right-wrapper-background-image" src="https://images.unsplash.com/photo-1667818139461-7772a11554f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </header>

            </main>

        </div>
        <div className="c-blurred-blue"></div>
        <div className="c-blurred-red"></div>
    </div>
  );
}

export default App;
