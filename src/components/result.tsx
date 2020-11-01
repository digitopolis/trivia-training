import React from "react";
import { Link } from "react-router-dom";

const Result: React.FC<{ score: number; newGame: Function }> = ({
  score,
  newGame,
}) => {
  const showMessage = (): string => {
    if (score > 7) {
      return "Great job!";
    } else if (score > 4) {
      return "Not bad.";
    } else {
      return "Better luck next time - keep practicing!";
    }
  };
  return (
    <header className="App-header">
      <h1>
        Your score: {score}/10 - {showMessage()}
      </h1>
      <Link to="/" className="App-link" onClick={() => newGame()}>
        <p>Click here to play another round!</p>
      </Link>
    </header>
  );
};

export default Result;
