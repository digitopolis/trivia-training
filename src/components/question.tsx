import React from "react";

const Question: React.FC<{
  number: number;
  question: string;
  choices: string[];
  nextQuestion: Function;
}> = ({ number, question, choices, nextQuestion }) => {
  return (
    <div>
      <h1>Question {number}:</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((choice, idx) => {
          return (
            <li key={idx} onClick={() => nextQuestion()}>
              {choice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
