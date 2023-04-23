import React from 'react';
function Dashboard() {
    return (
        <>
            <main className="main">
                <header className="header">
                    <div className="header-left">
                        <div className="header-left-wrapper">
                            <div className="header-left-wrapper-categories">
                                <a className="header-left-wrapper-categories-item">Flowers</a>
                                <a className="header-left-wrapper-categories-item">Adventure</a>
                                <a className="header-left-wrapper-categories-item">+</a>
                            </div>
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
        </>
    );
}

export default Dashboard;