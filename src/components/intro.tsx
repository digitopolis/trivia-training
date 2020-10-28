import React from "react";
import { Link } from "react-router-dom";

const Intro: React.FC<{}> = () => {
  return (
    <header className="App-header">
      <h1>Welcome to Tandem for 400!</h1>
      <Link to="/quiz">
        <p>Test your tivia skills with 10 random questions. Click to start!</p>
      </Link>
    </header>
  );
};

export default Intro;
