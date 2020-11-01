import React, { useState } from "react";

const Question: React.FC<{
  number: number;
  question: string;
  choices: string[];
  correctAnswer: string;
  nextQuestion: Function;
  selectAnswer: Function;
}> = ({
  number,
  question,
  choices,
  correctAnswer,
  nextQuestion,
  selectAnswer,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (choice: string): void => {
    setSubmitted(true);
    setTimeout(() => {
      nextQuestion();
      selectAnswer(choice);
      setSubmitted(false);
    }, 2000);
  };

  const showCorrectAnswer = (): JSX.Element => {
    return (
      <div>
        <h2>Correct answer: {correctAnswer}</h2>
      </div>
    );
  };
  return (
    <div>
      <h1>Question {number}:</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((choice, idx) => {
          return (
            <li key={idx} onClick={() => handleSubmit(choice)}>
              {choice}
            </li>
          );
        })}
      </ul>
      {submitted ? showCorrectAnswer() : null}
    </div>
  );
};

export default Question;
