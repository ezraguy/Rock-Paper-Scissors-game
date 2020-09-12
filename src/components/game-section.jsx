import React, { useState } from 'react'
import '../scss/game.scss';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import lizard from '../images/icon-lizard.svg';
import spock from '../images/icon-spock.svg';
import triangle from '../images/bg-triangle.svg';
import pentagon from '../images/bg-pentagon.svg';
import _ from 'lodash';

const GameSection = ({ proMode, handleWin }) => {

    const [SimpleMoves] = useState([
        { id: 1, name: 'paper', comp: paper, circleClass: "paper-circle circle-wrap-simple " },
        { id: 2, name: 'rock', comp: rock, circleClass: "rock-circle circle-wrap-simple " },
        { id: 3, name: 'scissors', comp: scissors, circleClass: "scissors-circle circle-wrap-simple " }]);

    const [proMoves,] = useState([
        { id: 1, name: 'paper', comp: paper, circleClass: "paper-circle-pro circle-wrap-pro " },
        { id: 2, name: 'rock', comp: rock, circleClass: "rock-circle-pro circle-wrap-pro " },
        { id: 3, name: 'scissors', comp: scissors, circleClass: "scissors-circle-pro circle-wrap-pro " },
        { id: 4, name: 'lizard', comp: lizard, circleClass: "lizard-circle-pro circle-wrap-pro " },
        { id: 5, name: 'spock', comp: spock, circleClass: "spock-circle-pro circle-wrap-pro " },

    ]);

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [userMove, setUserMove] = useState({})
    const [botMove, setBotMove] = useState({})
    const [message, setMessage] = useState('')
    const [circleAnimationClass, setCircleAnimationClass] = useState('empty-circle')

    const handleMove = (move) => {
        reset();
        setIsGameStarted(true);
        setMessage('');
        let randomBotPick = 0;
        let myMove = move;
        let userObj = {};
        let botObj
        if (!proMode) {
            randomBotPick = Math.floor(Math.random() * 3) + 1;
            userObj = _.find(SimpleMoves, (move) => { return move.id === myMove });
            botObj = _.find(SimpleMoves, (move) => { return move.id === randomBotPick });
        }

        else {
            randomBotPick = Math.floor(Math.random() * 5) + 1;
            userObj = _.find(proMoves, (move) => { return move.id === myMove });
            botObj = _.find(proMoves, (move) => { return move.id === randomBotPick });
        }


        setUserMove(userObj);
        setTimeout(() => {
            setBotMove(botObj);
            setCircleAnimationClass(botObj.circleClass)
            calcResult(userObj, botObj);
        }, 1700);
    }
    const reset = () => {
        setCircleAnimationClass('empty-circle');
        setUserMove({});
        setBotMove({});
    }

    const calcResult = (userObj, botObj) => {

        let userMoveId = Object.values(userObj)[0];
        let botMoveId = Object.values(botObj)[0];
        let caseToTest = userMoveId.toString() + " " + botMoveId.toString();
        if (userMoveId === botMoveId) {
            setMessage('Its a tie')
        }
        else
            if (!proMode) {
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

            else {
                switch (caseToTest) {
                    case "1 2":
                    case "2 3":
                    case "3 1":
                    case "2 4":
                    case "4 5":
                    case "5 3":
                    case "3 4":
                    case "4 1":
                    case "1 5":
                    case "5 2":
                        setMessage('You Win!');
                        handleWin();
                        break;
                    default:
                        setMessage('You Lose!');
                        break;

                }
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
                                <div className={move.circleClass} onClick={() => handleMove(move.id)}>
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
                                <div className={move.circleClass} onClick={() => handleMove(move.id)}>
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
                        <div className="user-result">
                            <p className="over-img-title">You picked</p>
                            <div className={userMove.circleClass} >
                                <div className="circle">
                                    <img src={userMove.comp} alt="move" />
                                </div>
                            </div>
                        </div>

                        <div className="result-text">
                            <p className="message">{message}</p>
                            <button className="play-again" onClick={() => setIsGameStarted(false)}>Play again</button>
                        </div>

                        <div className="bot-result">
                            <p className="over-img-title">The house picked</p>
                            <div className={circleAnimationClass} >
                                <div className="circle">
                                    <img src={botMove.comp} alt="move" />
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment >
    );
}

export default GameSection;