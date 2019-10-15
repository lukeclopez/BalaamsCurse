import { words } from "./wordsService";

export let time, scores, activePlayer, gameRunning;
export let usedWords,
  skippedWords,
  hardcoded_words,
  currentGuessWord,
  currentTabooWords,
  wordCount,
  totalWords;

export function initGame() {
  // Check localStorage for game values, otherwise use defaults
  if (localStorage.startingTime) {
    time = parseInt(localStorage.startingTime);
  } else {
    time = 60;
  }

  if (localStorage.activePlayer) {
    activePlayer = parseInt(localStorage.activePlayer);
  } else {
    activePlayer = 0;
  }

  if (localStorage.scores) {
    scores = localStorage.scores.split(",");
  } else {
    scores = [0, 0];
  }

  usedWords = [];
  if (localStorage.usedWords) {
    usedWords = localStorage.usedWords.split(",");
  } else {
    usedWords.length = 0;
  }

  wordCount = 0;

  return { time, activePlayer, scores, usedWords, wordCount };
}

export function selectWord(usedWords) {
  let dice = Math.floor(Math.random() * words.length);
  let selectedWord = words[dice];

  if (usedWords.length === 99) {
    // Empty our used words list if we have no words left
    console.log("Used word array cleared");
    usedWords.length = 0;
  } else if (usedWords.includes(selectedWord.guessWord)) {
    // Try again to get an unused word
    console.log("Repeated a word: " + selectedWord.guessWord);
    console.log(usedWords.length);
    selectWord();
  } else {
    // Add the word to the used words list
    usedWords.push(selectedWord.guessWord);

    // Add the used words list to local storage, separated by commas
    // TODO: Change from objects to plain text
    localStorage.setItem("usedWords", usedWords.join());
  }

  return selectedWord;
}
