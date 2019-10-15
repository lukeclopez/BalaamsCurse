import React, { Component } from "react";
import * as gL from "./services/gameLogic";
import Score from "./components/score";
import Timer from "./components/timer";
import WordsPanel from "./components/wordsPanel";
import ButtonGroup from "./components/buttonGroup";
import "./App.css";

class App extends Component {
  state = {
    allWords: [],
    startingTime: 60,
    activePlayer: 0,
    scores: [],
    usedWords: [],
    wordCount: 0,
    currentWord: { guessWord: "", tabooWords: [] },
    gameRunning: true
  };

  componentDidMount() {
    const initialValues = gL.initGame();
    const currentWord = gL.selectWord(this.state.usedWords);

    this.setState({
      ...initialValues,
      currentWord
    });
  }

  switchPlayer = () => {
    const { activePlayer } = this.state;
    let newActivePlayer = activePlayer;

    if (activePlayer === 0) {
      newActivePlayer = 1;
    } else {
      newActivePlayer = 0;
    }

    this.setState({ activePlayer: newActivePlayer });
  };

  handleTimeOut = () => {
    console.log("Out of time!");
    this.setState({ gameRunning: false });
    this.switchPlayer();
  };

  render() {
    const {
      currentWord,
      startingTime,
      scores,
      gameRunning,
      activePlayer
    } = this.state;
    console.log(startingTime);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Score value={scores[0]} isActive={activePlayer === 0} />
          </div>
          <div className="col">
            <Timer
              startingTime={startingTime}
              onTimeOut={this.handleTimeOut}
              timerActive={gameRunning}
            />
          </div>
          <div className="col">
            <Score value={scores[1]} isActive={activePlayer === 1} />
          </div>
        </div>
        <div className="row justify-content-center">
          <WordsPanel currentWord={currentWord} />
        </div>
        <div className="row justify-content-center block">
          <ButtonGroup />
        </div>
      </div>
    );
  }
}

export default App;
