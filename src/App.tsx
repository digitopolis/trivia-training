import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Intro from "./components/intro";

function App() {
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
