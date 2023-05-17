import {React, useEffect, useState} from 'react';
import axios from 'axios';
import GameCard from "./GameCard";

function GameShop() {
    const [latestGames, setLatestGames] = useState([]);
    const fetchLatestGames = async () => { const response2 = await axios.get('https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&ordering=-rating&page_size=20'); setLatestGames(response2.data.results); };
    useEffect(() => {
        fetchLatestGames();
    }, []);

    return (
        <>
            {latestGames.map(game => (
                <GameCard gameId={game.id} gameName={game.name} gameImage={game.background_image}></GameCard>
            ))}
        </>
    );
}

export default GameShop;