import React, { useState } from 'react'
import '../scss/game.scss';
import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import triangle from '../images/bg-triangle.svg';
const GameSection = () => {
    const [moves, SetMoves] = useState([{ id: 1, name: 'paper', comp: Paper },
    { id: 2, name: 'rock', comp: Rock }, { id: 3, name: 'scissors', comp: Scissors }]);

    const handleMove = (name) => {
        console.log(name);
    }
    return (
        <div className="game">
            <img className="triangle-background" src={triangle} alt="triangle" />
            {moves.map((move) => {

                return (
                    <React.Fragment>
                        <div className="circle-wrap" key={move.id} onClick={() => handleMove(move.name)}>
                            <div className="circle">
                                <img src={move.comp} alt="move" />
                            </div>

                        </div>
                    </React.Fragment>
                )
            })}

        </div>
    );
}

export default GameSection;