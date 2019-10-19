import React from "react";
import GuessWord from "./guessWord";
import TabooWords from "./tabooWords";

const WordsPanel = ({ currentWord }) => {
  const { guessWord, tabooWords } = currentWord;
  return (
    <div className="card text-center w-100">
      <div className="card-body">
        <h5 className="card-title">
          <GuessWord word={guessWord} />
        </h5>
        <span className="card-text">
          <TabooWords words={tabooWords} />
        </span>
      </div>
    </div>
  );
};

export default WordsPanel;
