import { React } from 'react';
import { Link } from "react-router-dom";

function GameCard( {gameId, gameName, gameImage} ) {
    return (
        <>
            <Link className="game-scroller-inner-game" key={gameId} to={`/game/${encodeURIComponent(gameId)}`}>
                <h3 className="game-scroller-inner-game-title">{gameName}</h3>
                <div className="game-scroller-inner-game-background">
                    <img className="game-scroller-inner-game-background-image" src={gameImage} alt={gameName} />
                </div>
            </Link>
        </>
    );
}

export default GameCard;