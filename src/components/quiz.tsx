import React, { useState } from "react";
import { IQuestion, shuffleArray } from "../utilities/quizHelpers";
import Question from "./question";

const Quiz: React.FC<{ questions: IQuestion[] }> = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const getNextQuestion = (): void => {
    const nextNumber = questionNumber + 1;
    setQuestionNumber(nextNumber);
    setCurrentQuestion(questions[nextNumber - 1]);
  };

  const shuffledChoices = (): string[] => {
    let choices = [] as string[];
    choices = choices.concat(
      currentQuestion.incorrect,
      currentQuestion.correct
    );
    return shuffleArray(choices);
  };
  return (
    <div>
      <Question
        number={questionNumber}
        question={currentQuestion.question}
        choices={shuffledChoices()}
        correctAnswer={currentQuestion.correct}
        nextQuestion={getNextQuestion}
      />
    </div>
  );
};

export default Quiz;
