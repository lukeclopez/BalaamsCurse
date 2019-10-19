import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
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
    remainingTime: 60,
    activePlayer: 0,
    scores: [],
    usedWords: [],
    skippedWords: [],
    wordCount: 0,
    currentWord: { guessWord: "", tabooWords: [] },
    gameRunning: false
  };

  componentDidMount() {
    this.initGame();
  }

  initGame = () => {
    const initialValues = gL.initGame();
    const currentWord = gL.selectWord(this.state.usedWords);

    clearInterval(2);
    setInterval(this.tickTimer, 1000);

    this.setState({
      ...initialValues,
      currentWord
    });
  };

  tickTimer = () => {
    const { startingTime, remainingTime, gameRunning } = this.state;

    if (gameRunning) {
      if (remainingTime < 1) {
        this.setState({ remainingTime: startingTime });
        this.handleTimeOut();
      } else {
        const newTime = remainingTime - 1;
        this.setState({ remainingTime: newTime });
      }
    }
  };

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

  pauseGame = () => {
    const { gameRunning, currentWord, wordCount, usedWords } = this.state;
    let newCurrentWord = currentWord;
    let newWordCount = wordCount;

    if (gameRunning) {
      this.setState({ gameRunning: false });
    } else {
      if (wordCount === 0) {
        newCurrentWord = gL.selectWord(usedWords);
        newWordCount++;
      }

      this.setState({
        currentWord: newCurrentWord,
        gameRunning: true,
        wordCount: newWordCount
      });
    }
  };

  handleTimeOut = () => {
    const newCurrentWord = gL.selectWord(this.state.usedWords);
    this.setState({
      gameRunning: false,
      currentWord: newCurrentWord
    });
    this.switchPlayer();
  };

  handleGotIt = () => {
    const {
      gameRunning,
      activePlayer,
      scores,
      usedWords,
      wordCount
    } = this.state;
    const newScores = [...scores];

    if (gameRunning) {
      // Update score
      newScores[activePlayer]++;
      const newCurrentWord = gL.selectWord(usedWords);

      this.setState({
        scores: newScores,
        currentWord: newCurrentWord,
        wordCount: wordCount + 1
      });
    }
  };

  handleSkip = () => {
    const { gameRunning, usedWords, skippedWords, currentWord } = this.state;

    if (gameRunning) {
      const newUsedWords = usedWords.filter(e => e !== currentWord);

      const newSkippedWords = [...skippedWords];
      newSkippedWords.push(currentWord);

      const newCurrentWord = gL.selectWord(usedWords);

      this.setState({
        skippedWords: newSkippedWords,
        currentWord: newCurrentWord,
        usedWords: newUsedWords
      });
    }
  };

  handlePlay = () => {
    this.pauseGame();
  };

  handleRestart = () => {
    const options = {
      title: "Title",
      message: "Are you sure you want to start a new game?",
      buttons: [
        {
          label: "Yes",
          onClick: this.initGame
        },
        {
          label: "No",
          onClick: () => {}
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true
    };

    confirmAlert(options);
  };

  handleOptions = () => {
    this.setState({
      gameRunning: false
    });
  };

  render() {
    const {
      currentWord,
      remainingTime,
      scores,
      gameRunning,
      activePlayer
    } = this.state;

    const buttonGroupHandlers = {
      onGotIt: this.handleGotIt,
      onSkip: this.handleSkip,
      onPlay: this.handlePlay,
      onRestart: this.handleRestart,
      onOptions: this.handleOptions
    };

    const blankWord = {
      guessWord: "Get your team to guess this word...",
      tabooWords: ["Without saying this", "or this", "or this", "or this"]
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Score value={scores[0]} isActive={activePlayer === 0} />
            </div>
            <div className="col text-center">
              <Timer remainingTime={remainingTime} />
            </div>
            <div className="col text-center">
              <Score value={scores[1]} isActive={activePlayer === 1} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <WordsPanel currentWord={gameRunning ? currentWord : blankWord} />
        </div>
        <div className="row justify-content-center">
          <ButtonGroup
            gameRunning={gameRunning}
            handlers={buttonGroupHandlers}
          />
        </div>
      </>
    );
  }
}

export default App;
