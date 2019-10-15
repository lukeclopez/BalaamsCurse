import React from "react";
import GuessWord from "./guessWord";
import TabooWords from "./tabooWords";

const WordsPanel = ({ currentWord }) => {
  const { guessWord, tabooWords } = currentWord;
  return (
    <div className="card">
      <div className="card-body">
        <GuessWord word={guessWord} />
        <hr className="style1"></hr>
        <TabooWords words={tabooWords} />
      </div>
    </div>
  );
};

export default WordsPanel;
