import React, { useState } from 'react';
import '../scss/main.scss';
import Rules from './rules';

const Main = () => {
    const [showRules, setShowRules] = useState(true);

    const showModal = () => {
        setShowRules(!showRules)
    }
    return (

        <div className="main">
            <div className="score-board">
                <div className="title">
                    <span>rock</span>
                    <span>paper</span>
                    <span>scissors</span>
                </div>
                <div className="score">
                    <span>Score</span>
                    <span className="score-number">12</span>
                </div>
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