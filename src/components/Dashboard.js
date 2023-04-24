import { React, useState, useEffect } from 'react';
import axios from 'axios';
function Dashboard() {
    const [latestGames, setLatestGames] = useState([]);
    const [myGames, setMyGames] = useState([]);
    const [headerGames, setHeaderGames] = useState([]);
    const fetchHeaderGames = async () => { const response = await axios.get('https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&search=Snufkin: Melody of Moominvalley,Oxenfree II: Lost Signals,Planet of Lana&page_size=1'); setHeaderGames(response.data.results); };
    const fetchLatestGames = async () => { const response2 = await axios.get('https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&ordering=-rating&page_size=3'); setLatestGames(response2.data.results); };
    const fetchMyGames = async () => { const response3 = await axios.get('https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&genres=adventure&ordering=-rating&page_size=5'); setMyGames(response3.data.results); };
    useEffect(() => {
        fetchLatestGames();
        fetchHeaderGames()
        fetchMyGames();
    }, []);

    return (
        <>
            <main className="main">
                {headerGames.map(game => (
                    <header className="header" key={game.id}>
                        <div className="header-left">
                            <div className="header-left-wrapper">
                                <div className="header-left-wrapper-categories">
                                    {game.genres.map(genre => (
                                        <a className="header-left-wrapper-categories-item" key={genre.id}>{genre.name}</a>
                                    ))}
                                </div>
                                <h1 className="header-left-wrapper-logo">{game.name}</h1>
                                <div className="header-left-wrapper-background">
                                    <img className="header-left-wrapper-background-image" src={game.background_image} alt={game.name} />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="header-right-wrapper">
                                <div className="header-right-wrapper-background">
                                    <img className="header-right-wrapper-background-image" src={game.background_image} alt={game.name} />
                                </div>
                            </div>
                        </div>
                    </header>
                ))}

                <section className="game-scroller">
                    <h2>Popular Games</h2>
                    <div className="game-scroller-inner">
                        {latestGames.map(game => (
                            <div className="game-scroller-inner-game" key={game.id}>
                                <h3 className="game-scroller-inner-game-title">{game.name}</h3>
                                <div className="game-scroller-inner-game-background">
                                    <img className="game-scroller-inner-game-background-image" src={game.background_image} alt={game.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="game-scroller">
                    <h2>My Games</h2>
                    <div className="game-scroller-inner">
                        {myGames.map(game => (
                            <div className="game-scroller-inner-game" key={game.id}>
                                <h3 className="game-scroller-inner-game-title">{game.name}</h3>
                                <div className="game-scroller-inner-game-background">
                                    <img className="game-scroller-inner-game-background-image" src={game.background_image} alt={game.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Dashboard;