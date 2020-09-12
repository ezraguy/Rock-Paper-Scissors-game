import React, { useState } from 'react';
import '../scss/main.scss';
import Rules from './rules';
import GameSection from './game-section';

const Main = () => {
    const [showRules, setShowRules] = useState(false);
    const [proMode, setProMode] = useState(false);
    const [wins, setWins] = useState(0)
    const showModal = () => {
        setShowRules(!showRules)
    }
    const handleProMode = () => {
        setProMode(!proMode);
    }

    const handleWin = () => {
        setWins(wins + 1)
    }

    return (

        <div className="main">


            <div className="score-board">
                <button className="set-pro-mode" onClick={handleProMode}>Switch mode</button>
                <div className="title">
                    {proMode ?
                        <React.Fragment>
                            <span>rock</span>
                            <span>paper</span>
                            <span>scissors</span>
                            <span>lizard</span>
                            <span>spock</span>
                        </React.Fragment>

                        : <React.Fragment>
                            <span>rock</span>
                            <span>paper</span>
                            <span>scissors</span>


                        </React.Fragment>
                    }

                </div>
                <div className="score">
                    <span>Score</span>
                    <span className="score-number">{wins}</span>
                </div>
            </div>
            <div className="game-section">
                <GameSection proMode={proMode} handleWin={handleWin} />
            </div>
            <button className="rules-button" onClick={showModal}>rules</button>

            {showRules &&
                <React.Fragment>
                    <div className="overlay"></div>
                    <div className="rules">
                        <Rules showModal={showModal} proMode={proMode} />
                    </div>
                </React.Fragment>
            }

        </div>

    );
}


export default Main;