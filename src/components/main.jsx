import React from 'react';
import '../scss/main.scss';

const Main = () => {

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
                    <span className="score-number">13</span>
                </div>
            </div>
        </div>

    );
}


export default Main;