import React from "react";
import { render } from "@testing-library/react";
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
        nextQuestion={() => null}
      />
    );
    expect(getByText(/Devmynd/)).toBeInTheDocument();
    expect(getByText(/Burger Shack/)).toBeInTheDocument();
    expect(getByText(/Extraordinary/)).toBeInTheDocument();
    expect(getByText(/Tandem/)).toBeInTheDocument();
  });
});
