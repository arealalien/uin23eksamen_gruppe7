import { React } from 'react';
import { favorites } from "./Favorites";
import { Link } from "react-router-dom";

function removeFromFavorites(game) {
    const index = favorites.findIndex((favGame) => favGame.id === game.id);
    if (index !== -1) {
        favorites.splice(index, 1);
    }
}

function MyFavorites() {
    return (
        <>
            <main className="main">
                <section className="game-scroller">
                    <h2 className="game-scroller-title">My Favorite Games</h2>
                    <div className="game-scroller-inner">
                        {favorites.map(game => (
                            <div className="game-scroller-inner-game" key={game.id}>
                                <div className="game-scroller-inner-game-favorite">
                                    <svg className="game-scroller-inner-game-favorite-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" onClick={() => removeFromFavorites(game)}>
                                        <title>Heart Filled</title>
                                        <g id="heart-outer-fav">
                                            <g id="heart-fav" transform="translate(2.550170, 3.550158)">
                                                <path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z" id="Stroke-1"/>
                                                <path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842" id="Stroke-3"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <Link className="game-scroller-inner-game-title" to={`/game/${encodeURIComponent(game.name)}`}>{game.name}</Link>
                                <Link className="game-scroller-inner-game-background" to={`/game/${encodeURIComponent(game.name)}`}>
                                    <img className="game-scroller-inner-game-background-image" src={game.background_image} alt={game.name} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default MyFavorites;