import React from "react";

const GuessWord = ({ word }) => {
  return (
    <span className="card-title white-text">
      <b>{word}</b>
    </span>
  );
};

export default GuessWord;
