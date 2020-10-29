import React from "react";
import { Question } from "../utilities/quizHelpers";

const Quiz: React.FC<{ questions: Question[] }> = ({ questions }) => {
  return (
    <div>
      <h1>Question 1:</h1>
      <p>{questions[0].question}</p>
    </div>
  );
};

export default Quiz;
