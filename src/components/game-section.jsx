import React, { useState } from 'react'
import '../scss/game.scss';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import lizard from '../images/icon-lizard.svg';
import spock from '../images/icon-spock.svg';
import triangle from '../images/bg-triangle.svg';
import pentagon from '../images/bg-pentagon.svg';
import _, { set } from 'lodash';

const GameSection = ({ proMode, handleWin }) => {

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

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [userMove, setUserMove] = useState({})
    const [botMove, setBotMove] = useState({})
    const [message, setMessage] = useState('')
    const handleMove = (move) => {
        setIsGameStarted(true);
        setMessage('');
        let myMove = move;
        if (!proMode) {
            let randomBotPick = Math.floor(Math.random() * 3) + 1;
            let userObj = _.find(SimpleMoves, (move) => { return move.id === myMove });
            let botObj = _.find(SimpleMoves, (move) => { return move.id === randomBotPick });

            setUserMove(userObj)
            setBotMove(botObj)

            calcResult(userObj, botObj);

        }
    }

    const calcResult = (userObj, botObj) => {

        let userMoveId = Object.values(userObj)[0];
        let botMoveId = Object.values(botObj)[0];

        let caseToTest = userMoveId.toString() + " " + botMoveId.toString();

        if (userMoveId === botMoveId) {
            setMessage('Its a tie')
        }
        else
            switch (caseToTest) {
                case "1 2":
                case "2 3":
                case "3 1":
                    setMessage('You Win!');
                    handleWin();
                    break;

                default:
                    setMessage('You Lose!');
                    break;

            }




    }


    return (

        <React.Fragment>

            {
                !isGameStarted && <div className="game">
                    <img className="background-shape" src={proMode ? pentagon : triangle} alt="triangle" />
                    {!proMode && SimpleMoves.map((move) => {
                        return (
                            <React.Fragment key={move.id}>
                                <div className='circle-wrap-simple' onClick={() => handleMove(move.id)}>
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
                                <div className='circle-wrap-pro' onClick={() => handleMove(move.id)}>
                                    <div className="circle">
                                        <img src={move.comp} alt="move" />
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}



                </div>

            }


            {isGameStarted &&
                <React.Fragment>
                    <div className="result">
                        <div className='circle-wrap-simple' >
                            <div className="circle">
                                <img src={userMove.comp} alt="move" />
                            </div>
                        </div>
                        <div className="result-text">
                            <p className="message">{message}</p>
                            <button className="play-again" onClick={() => setIsGameStarted(false)}>Play again</button>
                        </div>
                        <div className='circle-wrap-simple' >
                            <div className="circle">
                                <img src={botMove.comp} alt="move" />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment >
    );
}

export default GameSection;