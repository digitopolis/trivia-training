import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Intro from "./components/intro";
import { get10Questions, shuffleQuestions } from "./utilities/quizHelpers";

const DATA = require("./data.json");

function App() {
  const [questions, setQuestions] = useState(
    get10Questions(shuffleQuestions(DATA))
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/quiz">
            <h1>Question 1</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
