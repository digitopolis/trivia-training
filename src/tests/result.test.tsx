import React from "react";
import { render } from "@testing-library/react";
import Result from "../components/result";
import { BrowserRouter } from "react-router-dom";

describe("result component", () => {
  it("displays the user's score out of 10", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Result score={5} newGame={() => null} />
      </BrowserRouter>
    );
    const userScore = getByText(/5\/10/);
    expect(userScore).toBeInTheDocument();
  });

  describe("messages based on score", () => {
    it("displays Great Job! if score is over 7", () => {
      const { getByText } = render(
        <BrowserRouter>
          <Result score={9} newGame={() => null} />
        </BrowserRouter>
      );
      const message = getByText(/Great job!/);
      expect(message).toBeInTheDocument();
    });

    it("displays Not bad. if score is between 5 and 7", () => {
      const { getByText } = render(
        <BrowserRouter>
          <Result score={5} newGame={() => null} />
        </BrowserRouter>
      );
      const userScore = getByText(/Not bad/);
      expect(userScore).toBeInTheDocument();
    });
  });
});
