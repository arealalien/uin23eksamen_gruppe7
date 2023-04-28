import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Header = ({ game }) => {
    return (
        <div className="header-inner-2">
            <img className="background-blur" src={game.background_image} alt={game.name} />
            <div className="header-left">
                <div className="header-left-wrapper">
                    <div className="header-left-wrapper-categories">
                        {game.genres.slice(0, 3).map((genre) => (
                            <a className="header-left-wrapper-categories-item" key={genre.id}>
                                {genre.name}
                            </a>
                        ))}
                        {game.genres.length > 3 && (
                            <a className="header-left-wrapper-categories-item" key="more">
                                +
                            </a>
                        )}
                    </div>
                    <h1 className="header-left-wrapper-logo">{game.name}</h1>
                    <div className="header-left-wrapper-background">
                        <img className="header-left-wrapper-background-image" src={game.background_image} alt={game.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

function GamePage() {
    const { gameName } = useParams();
    const [headerGame, setHeaderGame] = useState(null);

    useEffect(() => {
        const fetchHeaderGame = async () => {
            const response = await axios.get(`https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&search=${gameName}&page_size=1`);
            setHeaderGame(response.data.results[0]);
        };

        fetchHeaderGame();
    }, [gameName]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <header className="header">
                {headerGame && <Header game={headerGame} />}
            </header>
            <main className="main"></main>
        </>
    );
}

export default GamePage;