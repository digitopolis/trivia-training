import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Intro from "./components/intro";
import Quiz from "./components/quiz";
import {
  get10Questions,
  IQuestion,
  shuffleArray,
} from "./utilities/quizHelpers";

const DATA: IQuestion[] = require("./data.json");

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>(
    get10Questions(shuffleArray(DATA))
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/quiz">
            <Quiz questions={questions} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
