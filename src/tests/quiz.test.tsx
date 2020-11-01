import React from "react";
import { fireEvent, render } from "@testing-library/react";
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
    const { getByText } = render(
      <Quiz questions={questions} newGame={() => null} />
    );
    const questionTitle = getByText(/Question 1/);
    expect(questionTitle).toBeInTheDocument();
  });

  it("displays the correct question text", () => {
    const { getByText } = render(
      <Quiz questions={questions} newGame={() => null} />
    );
    const firstQuestion = getByText(questions[0].question);
    expect(firstQuestion).toBeInTheDocument();
  });

  it("clicking an answer changes the question", () => {
    const { getByText } = render(
      <Quiz questions={questions} newGame={() => null} />
    );
    const firstQuestion = getByText(questions[0].question);
    expect(firstQuestion).toBeInTheDocument();
    fireEvent(
      getByText(/Devmynd/),
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    setTimeout(() => {
      const secondQuestion = getByText(questions[1].question);
      expect(secondQuestion).toBeInTheDocument();
    }, 4000);
  });

  it("adds chosen answer to answer array", () => {
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(useStateMock);
    const { getByText } = render(
      <Quiz questions={questions} newGame={() => null} />
    );
    fireEvent(
      getByText(/Devmynd/),
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    setTimeout(() => {
      expect(setState).toHaveBeenCalledWith(["Devmynd"]);
    }, 3000);
    jest.clearAllMocks();
  });

  it("adds multiple selected answers", () => {
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(useStateMock);
    const { getByText } = render(
      <Quiz questions={questions} newGame={() => null} />
    );
    fireEvent(
      getByText(/Devmynd/),
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    setTimeout(() => {
      fireEvent(
        getByText(/Vidi, vini, vici/),
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );
    }, 3000);
    setTimeout(() => {
      expect(setState).toHaveBeenCalledWith(["Devmynd", "Vidi, vini, vici"]);
    }, 3000);
    jest.clearAllMocks();
  });

  it("shows result after final question", () => {
    const { getByText } = render(
      <Quiz questions={[questions[0], questions[1]]} newGame={() => null} />
    );
    fireEvent(
      getByText(questions[0].correct),
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    setTimeout(() => {
      fireEvent(
        getByText(questions[1].correct),
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );
      const result = getByText(/Your score/);
      expect(result).toBeInTheDocument();
    }, 4000);
  });
});
