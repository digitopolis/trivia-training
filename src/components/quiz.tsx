import React, { useState } from "react";
import { IQuestion, shuffleArray } from "../utilities/quizHelpers";
import Question from "./question";

const Quiz: React.FC<{ questions: IQuestion[] }> = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([] as string[]);

  const getNextQuestion = (): void => {
    const nextNumber = questionNumber + 1;
    setQuestionNumber(nextNumber);
    setCurrentQuestion(questions[nextNumber - 1]);
  };

  const addAnswer = (answer: string): void => {
    setAnswers([...answers, answer]);
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
    <header className="App-header">
      <Question
        number={questionNumber}
        question={currentQuestion.question}
        choices={shuffledChoices()}
        correctAnswer={currentQuestion.correct}
        nextQuestion={getNextQuestion}
        selectAnswer={addAnswer}
      />
    </header>
  );
};

export default Quiz;
