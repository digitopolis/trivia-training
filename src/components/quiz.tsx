import React, { useState } from "react";
import { getScore, IQuestion, shuffleArray } from "../utilities/quizHelpers";
import Question from "./question";
import Result from "./result";

const Quiz: React.FC<{ questions: IQuestion[] }> = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([] as string[]);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const getNextQuestion = (): void => {
    const nextNumber = questionNumber + 1;
    setQuestionNumber(nextNumber);
    setCurrentQuestion(questions[nextNumber - 1]);
  };

  const showResult = (): void => {
    const score = getScore(questions, answers);
    setScore(score);
    setDone(true);
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
      {done ? (
        <Result score={score} />
      ) : (
        <Question
          number={questionNumber}
          question={currentQuestion.question}
          choices={shuffledChoices()}
          correctAnswer={currentQuestion.correct}
          nextQuestion={questionNumber === 10 ? showResult : getNextQuestion}
          selectAnswer={addAnswer}
        />
      )}
    </header>
  );
};

export default Quiz;
