import React, { useState } from 'react'
import '../scss/game.scss';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import lizard from '../images/icon-lizard.svg';
import spock from '../images/icon-spock.svg';
import triangle from '../images/bg-triangle.svg';
import pentagon from '../images/bg-pentagon.svg';
const GameSection = ({ proMode }) => {

    const [SimpleMoves] = useState([
        { id: 1, name: 'paper', comp: paper },
        { id: 2, name: 'rock', comp: rock },
        { id: 3, name: 'scissors', comp: scissors }]);

    const [proMoves,] = useState([
        { id: 1, name: 'paper', comp: paper },
        { id: 2, name: 'rock', comp: rock },
        { id: 3, name: 'scissors', comp: scissors },
        { id: 4, name: 'lizard', comp: lizard },
        { id: 5, name: 'spock', comp: spock },

    ]);


    const handleMove = (name) => {
        console.log(name);
    }


    return (

        <React.Fragment>

            <div className="game">

                <img className="background-shape" src={proMode ? pentagon : triangle} alt="triangle" />

                {!proMode && SimpleMoves.map((move) => {
                    return (
                        <React.Fragment key={move.id}>
                            <div className='circle-wrap-simple' onClick={() => handleMove(move.name)}>
                                <div className="circle">
                                    <img src={move.comp} alt="move" />
                                </div>

                            </div>
                        </React.Fragment>
                    )

                })}

                {proMode && proMoves.map((move) => {
                    return (
                        <React.Fragment key={move.id} >
                            <div className='circle-wrap-pro' onClick={() => handleMove(move.name)}>
                                <div className="circle">
                                    <img src={move.comp} alt="move" />
                                </div>

                            </div>
                        </React.Fragment>
                    )
                })}



            </div>
        </React.Fragment>
    );
}

export default GameSection;