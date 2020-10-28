import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  it("renders welcome message", () => {
    render(<App />);
    const h1Element = screen.getByText(/Welcome to Tandem for 400!/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("renders dialog to advance to questions", () => {
    render(<App />);
    const pElement = screen.getByText(/Click to start/);
    expect(pElement).toBeInTheDocument();
  });

  it("shows first question on click", () => {
    const { getByText } = render(<App />);
    fireEvent(
      getByText(/Click to start/),
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    const questionHeader = getByText(/Question 1/);
    expect(questionHeader).toBeInTheDocument();
  });
});
