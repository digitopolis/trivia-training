# Tandem for 400

Test your knowledge (and maybe learn something new) with a quick round of trivia!

## Requirements

Make sure you have npm and Node.js installed by running:

```bash
node -v
npm -v
```

Follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you need to install them

## Quick start

Clone the project, install dependencies, and get it running on your local machine by running:

```bash
git clone git@github.com:digitopolis/trivia-training.git
cd trivia-training
npm install
```

Run the test suites with:

```bash
npm test
```

Run the app with:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to play

From the intro page, simply click `'click here'` to start a round of trivia. For each question, select your answer by clicking on one of the four choices below the question. After you make your choice, your answer will be highlighted (in green if correct, or red if incorrect) and the correct answer will be shown below, before moving on to the next question. After 10 questions, you'll see your score.

At the end of the game, click `'click here'` to start a new round of questions. The 10 questions are randomly chosen, so play again to see something new!

## Future plans

In future iterations of the app, I would like to be able to draw from a greater selection of questions/answers by integrating some external trivia API. This would also make it possible to add a 'category select' feature to allow players to choose a specific topic to focus on (i.e. history, geography, sports, etc.)

I would also like to implement a local multiplayer mode, where two players could play against each other, answering the same 10 questions.

## Built with

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

# Author

[Matt Readout](https://github.com/digitopolis)
