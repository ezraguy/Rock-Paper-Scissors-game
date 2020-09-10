import React, { useState } from 'react';
import '../scss/main.scss';
import Rules from './rules';
import GameSection from './game-section';

const Main = () => {
    const [showRules, setShowRules] = useState(false);
    const [proMode, setProMode] = useState(false);

    const showModal = () => {
        setShowRules(!showRules)
    }
    const handleProMode = () => {
        setProMode(!proMode);
    }
    return (

        <div className="main">
            <button className="set-pro-mode" onClick={handleProMode}>pro</button>

            <div className="score-board">
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
                    <span className="score-number">12</span>
                </div>
            </div>
            <div className="game-section">
                <GameSection proMode={proMode} />
            </div>
            <button className="rules-button" onClick={showModal}>rules</button>
            {/* rules */}
            {showRules &&
                <React.Fragment>
                    <div className="overlay"></div>
                    <div className="rules">
                        <Rules showModal={showModal} />
                    </div>
                </React.Fragment>
            }

        </div>

    );
}


export default Main;