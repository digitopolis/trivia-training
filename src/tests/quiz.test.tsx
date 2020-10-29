import React from "react";
import { queryByTestId, render } from "@testing-library/react";
import Quiz from "../components/quiz";

const questions = [
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
];

describe("quiz component", () => {
  it("displays first question on render", () => {
    const { getByText } = render(<Quiz questions={questions} />);
    const questionTitle = getByText(/Question 1/);
    expect(questionTitle).toBeInTheDocument();
  });

  it("displays the correct question text", () => {
    const { getByText } = render(<Quiz questions={questions} />);
    const firstQuestion = getByText(questions[0].question);
    expect(firstQuestion).toBeInTheDocument();
  });
});
