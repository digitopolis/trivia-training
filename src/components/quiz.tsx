import React, { useEffect, useState } from "react";
import { getScore, IQuestion } from "../utilities/quizHelpers";
import Question from "./question";
import Result from "./result";

const Quiz: React.FC<{ questions: IQuestion[]; newGame: Function }> = ({
  questions,
  newGame,
}) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([] as string[]);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const score = getScore(questions, answers);
    setScore(score);
  }, [questions, answers]);

  const getNextQuestion = (): void => {
    const nextNumber = questionNumber + 1;
    setQuestionNumber(nextNumber);
    setCurrentQuestion(questions[nextNumber - 1]);
  };

  const showResult = (): void => {
    setDone(true);
  };

  const addAnswer = (answer: string): void => {
    setAnswers([...answers, answer]);
  };

  const getChoices = (): string[] => {
    let choices = [] as string[];
    choices = choices.concat(
      currentQuestion.incorrect,
      currentQuestion.correct
    );
    return choices.sort();
  };
  return (
    <header className="App-header">
      {done ? (
        <Result score={score} newGame={newGame} />
      ) : (
        <Question
          number={questionNumber}
          question={currentQuestion.question}
          choices={getChoices()}
          correctAnswer={currentQuestion.correct}
          nextQuestion={
            questionNumber === questions.length ? showResult : getNextQuestion
          }
          selectAnswer={addAnswer}
        />
      )}
    </header>
  );
};

export default Quiz;
