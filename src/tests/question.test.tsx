import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Question from "../components/question";

const question = "What was T*ndem's previous name?";
const choices = ["Tandem", "Burger Shack", "Devmynd", "Extraordinary Humans"];

describe("question component", () => {
  it("renders four answer choices", () => {
    const { getByText } = render(
      <Question
        number={1}
        question={question}
        choices={choices}
        correctAnswer={"Devmynd"}
        nextQuestion={() => null}
        selectAnswer={() => null}
      />
    );
    expect(getByText(/Devmynd/)).toBeInTheDocument();
    expect(getByText(/Burger Shack/)).toBeInTheDocument();
    expect(getByText(/Extraordinary/)).toBeInTheDocument();
    expect(getByText(/Tandem/)).toBeInTheDocument();
  });

  it("shows the correct answer after one is picked", () => {
    const { getByText } = render(
      <Question
        number={1}
        question={question}
        choices={choices}
        correctAnswer={"Devmynd"}
        nextQuestion={() => null}
        selectAnswer={() => null}
      />
    );
    fireEvent(
      getByText(/Devmynd/),
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    setTimeout(() => {
      expect(getByText(/Correct answer:/)).toBeInTheDocument();
    }, 1000);
  });

  it("highlights the chosen answer in green if correct", () => {
    const { getByText } = render(
      <Question
        number={1}
        question={question}
        choices={choices}
        correctAnswer={"Devmynd"}
        nextQuestion={() => null}
        selectAnswer={() => null}
      />
    );
    const correct = getByText(/Devmynd/);
    fireEvent(
      correct,
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    setTimeout(() => {
      expect(correct.classList.contains("correct")).toBe(true);
    }, 1000);
  });

  it("highlights the chosen answer in red if incorrect", () => {
    const { getByText } = render(
      <Question
        number={1}
        question={question}
        choices={choices}
        correctAnswer={"Devmynd"}
        nextQuestion={() => null}
        selectAnswer={() => null}
      />
    );
    const correct = getByText(/Devmynd/);
    fireEvent(
      correct,
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    setTimeout(() => {
      expect(correct.classList.contains("incorrect")).toBe(true);
    }, 1000);
  });
});
