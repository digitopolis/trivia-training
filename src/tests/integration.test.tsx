import React from "react";
import { fireEvent, getByText, render } from "@testing-library/react";
import Quiz from "../components/quiz";
import { IQuestion } from "../utilities/quizHelpers";
import { act } from "react-dom/test-utils";

const questions: IQuestion[] = [
  {
    question: "What was Tandem previous name?",
    incorrect: ["Tandem", "Burger Shack", "Extraordinary Humans"],
    correct: "Devmynd",
  },
  {
    question:
      "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    incorrect: ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
    correct: "Et tu, Brute?",
  },
  {
    question: "A group of tigers are referred to as:",
    incorrect: ["Chowder", "Pride", "Destruction"],
    correct: "Ambush",
  },
  {
    question: "What is the top speed an average cat can travel?",
    incorrect: ["42 mph", "13 mph", "9 mph"],
    correct: "31 mph",
  },
  {
    question: "A cat can jump to _____ times its own height:",
    incorrect: ["3", "9", "7"],
    correct: "5",
  },
  {
    question: "What is the only letter that doesn't appear in a US state name?",
    incorrect: ["M", "Z", "X"],
    correct: "Q",
  },
  {
    question: "What is the name for a cow-bison hybrid?",
    incorrect: ["Cowson", "Bicow", "Mooson"],
    correct: "Beefalo",
  },
  {
    question: "What is the largest freshwater lake in the world?",
    incorrect: ["Lake Baikal", "Lake Michigan", "Lake Victoria"],
    correct: "Lake Superior",
  },

  {
    question: "In a website address bar, what does WWW stand for?",
    incorrect: ["Wild Wild West", "War World Web"],
    correct: "World Wide Web",
  },
  {
    question:
      "In a game of bingo, what number is represented by the name two little ducks?",
    incorrect: ["20", "55", "77"],
    correct: "22",
  },
];

const delay = async (time: number = 2000) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, time);
  });
};

jest.setTimeout(30000);

describe("integration tests", () => {
  it("runs through a complete game and displays the result", async () => {
    const { getByText } = render(<Quiz questions={questions} />);
    await act(async () => {
      for (const question of questions) {
        await delay();
        fireEvent(
          getByText(question.correct),
          new MouseEvent("click", { bubbles: true, cancelable: true })
        );
      }
    });
    setTimeout(() => {
      const finalResult = getByText(/Your score: 10\/10/);
      expect(finalResult).toBeInTheDocument();
    }, 3000);
  });
});
