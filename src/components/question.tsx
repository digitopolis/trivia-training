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
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [borderClass, setBorderClass] = useState("");

  const handleSubmit = (idx: number, choice: string): void => {
    setAnswerIndex(idx);
    changeBorderColor(idx, choice);
    setSubmitted(true);
    selectAnswer(choice);
    setTimeout(() => {
      nextQuestion();
      setSubmitted(false);
      setAnswerIndex(null);
    }, 2000);
  };

  const changeBorderColor = (idx: number, choice: string) => {
    if (choice === correctAnswer) {
      setBorderClass("correct");
    } else {
      setBorderClass("incorrect");
    }
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
            <li
              key={idx}
              onClick={() => handleSubmit(idx, choice)}
              className={idx === answerIndex ? borderClass : ""}
            >
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
