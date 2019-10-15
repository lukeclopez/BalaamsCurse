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
    time: 0,
    activePlayer: 0,
    scores: [],
    usedWords: [],
    wordCount: 0,
    currentWord: { guessWord: "", tabooWords: [] }
  };

  componentDidMount() {
    this.setState({
      currentWord: gL.selectWord(this.state.usedWords),
      ...gL.initGame()
    });
  }

  render() {
    const { currentWord, time, scores } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Score value={scores[0]} />
          </div>
          <div className="col">
            <Timer value={time} />
          </div>
          <div className="col">
            <Score value={scores[1]} />
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
