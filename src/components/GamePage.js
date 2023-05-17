import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Header = ({ game }) => {
    console.log(game);

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
    const { gameId } = useParams();
    const [headerGame, setHeaderGame] = useState(null);

    useEffect(() => {
        const fetchHeaderGame = async () => {
            const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=affd029da2d94621a863f73fd5b36c21`);
            setHeaderGame(response.data);
        };

        fetchHeaderGame();
    }, [gameId]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const createMarkup = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <>
            <header className="header">
                {headerGame && <Header game={headerGame} />}
            </header>
            <main className="main">
                {headerGame ? (
                    <>
                        <div className="game-details">
                            <div className="game-details-left">
                                <div className="game-details-left-description" dangerouslySetInnerHTML={createMarkup(headerGame.description)}></div>
                                <div className="game-details-left-developers">
                                    <p>Developers</p>
                                    {headerGame.developers.map((developer) => (
                                        <div className="game-details-left-developers-item" key={developer.id}>
                                            <div className="game-details-left-developers-item-details">
                                                <a className="game-details-left-developers-item-details-title" href={headerGame.website} target="_blank">{developer.name}</a>
                                            </div>
                                            <img className="game-details-left-developers-item-background" src={developer.image_background} alt={developer.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="game-details-right">
                                <div className="game-details-right-top">
                                    {headerGame.released !== null ? (
                                        <div className="game-details-right-top-block">
                                            <p>Released</p>
                                            <p>{headerGame.released}</p>
                                        </div>
                                    ) : (
                                        <div className="game-details-right-top-block">
                                            <p>Coming Soon</p>
                                        </div>
                                    )}
                                    {headerGame.metacritic ? <div className="game-details-right-top-block"><p>Metacritic Rating</p><p>{headerGame.metacritic}</p></div> : null}
                                    {headerGame.rating !== 0 && <div className="game-details-right-top-block"><p>Rating</p><p>{headerGame.rating}</p></div>}
                                    <div>
                                        {headerGame.platforms.map((platform) => (
                                            <p key={platform.platform.id}>{platform.platform.name}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="game-details-right-stores">
                                    {headerGame.stores.length > 0 ? (
                                        <>
                                            <p>Stores</p>
                                            {headerGame.stores.map((store) => (
                                                    <div className="game-details-right-stores-item" key={store.id}>
                                                        <div className="game-details-right-stores-item-details">
                                                            <h2 className="game-details-right-stores-item-details-title">{store.store.name}</h2>
                                                        </div>
                                                        {store.store.image_background && (
                                                            <img className="game-details-right-stores-item-background" src={store.store.image_background} alt={store.store.name} />
                                                        )}
                                                    </div>
                                            ))}
                                        </>
                                    ) : null}
                                </div>
                                <div className="game-details-right-stores">
                                    {headerGame.publishers.length > 0 ? (
                                        <>
                                            <p>Publishers</p>
                                            {headerGame.publishers.map((publisher) => (
                                                <div className="game-details-right-stores-item" key={publisher.id}>
                                                    <div className="game-details-right-stores-item-details">
                                                        <h2 className="game-details-right-stores-item-details-title">{publisher.name}</h2>
                                                    </div>
                                                    <img className="game-details-right-stores-item-background" src={publisher.image_background} alt={publisher.name} />
                                                </div>
                                            ))}
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </>
    );
}

export default GamePage;