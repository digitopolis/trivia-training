import React from "react";

const Result: React.FC<{ score: number }> = ({ score }) => {
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
    </header>
  );
};

export default Result;
