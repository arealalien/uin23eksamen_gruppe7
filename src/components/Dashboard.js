import { React, useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Header = ({ game, isCurrent }) => {
    const backgroundStyle = {
        opacity: isCurrent ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
    };

    const headerLeftWrapperStyle = {
        zIndex: 2,
        opacity: isCurrent ? "1" : "0",
        transition: "opacity .8s ease-in-out",
    };

    const categoryStyle = {
        opacity: isCurrent ? "1" : "0",
        transition: "opacity .8s ease-in-out",
    };

    const logoStyle = {
        opacity: isCurrent ? "1" : "0",
        transition: "opacity .8s ease-in-out",
    };

    return (
        <div className="header-inner">
            <img className="background-blur" style={backgroundStyle} src={game.background_image} alt={game.name} />
            <div className="header-left">
                <div className="header-left-wrapper" style={headerLeftWrapperStyle}>
                    <div className="header-left-wrapper-categories" style={categoryStyle}>
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
                    <h1 className="header-left-wrapper-logo" style={logoStyle}>
                        {game.name}
                    </h1>
                    <div className="header-left-wrapper-background" style={backgroundStyle}>
                        <img className="header-left-wrapper-background-image" src={game.background_image} alt={game.name} />
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div className="header-right-wrapper" style={headerLeftWrapperStyle}>
                    <div className="header-right-wrapper-background" style={backgroundStyle}>
                        <img className="header-right-wrapper-background-image" src={game.background_image} alt={game.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeaderSlider = ({ games }) => {
    const [currentIndex, setCurrentGameIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGameIndex((currentIndex) => (currentIndex + 1) % games.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [games]);

    useEffect(() => {
        setCurrentGameIndex(0);
    }, [games]);

    function handleTransitionEnd() {
        const sliderItems = sliderRef.current.querySelectorAll('.header-slider-item');
        const lastItemIndex = games.length - 1;

        sliderItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.opacity = 1;
            } else if (index === lastItemIndex) {
                item.style.opacity = 1;
            } else {
                item.style.opacity = 0;
            }
        });
    }

    return (
        <div ref={sliderRef} className="header-slider" onTransitionEnd={handleTransitionEnd}>
            {games.map((game, index) => (
                <div
                    key={game.id}
                    className={`header-slider-item${currentIndex === index ? ' header-slider-item-current' : ''}`}
                    style={{ zIndex: currentIndex === index ? 1 : 0 }}
                    data-index={index}
                >
                    <Header game={game} isCurrent={currentIndex === index} />
                </div>
            ))}
        </div>
    );
};

function Dashboard() {
    const [latestGames, setLatestGames] = useState([]);
    const [myGames, setMyGames] = useState([]);
    const [headerGames, setHeaderGames] = useState([]);
    const fetchLatestGames = async () => { const response2 = await axios.get('https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&ordering=-rating&page_size=3'); setLatestGames(response2.data.results); };
    const fetchMyGames = async () => { const response3 = await axios.get('https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&genres=adventure&ordering=-rating&page_size=5'); setMyGames(response3.data.results); };
    useEffect(() => {
        fetchLatestGames();
        fetchMyGames();
    }, []);

    useEffect(() => {
        const fetchHeaderGames = async () => {
            const response = await axios.get(
                'https://api.rawg.io/api/games?key=affd029da2d94621a863f73fd5b36c21&search=Snufkin: Melody of Moominvalley,Starfield,Oxenfree II: Lost Signals,Planet of Lana,Scars Above&page_size=6'
            );
            setHeaderGames(response.data.results);
        };
        fetchHeaderGames();
    }, []);

    return (
        <>
            <main className="main">
                <header className="header">
                    <HeaderSlider games={headerGames} />
                </header>

                <section className="game-scroller">
                    <h2 className="game-scroller-title">Popular Games</h2>
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
                    <h2 className="game-scroller-title">My Games</h2>
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