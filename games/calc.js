/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import welcome from '../src/cli.js';
import * as start from '../src/index.js';

const startGame = () => {
  const getRandomOperator = () => {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
      return '+';
    } if (rand === 1) {
      return '-';
    }
    return '*';
  };

  const answerTrue = (first, second, operator) => {
    if (operator === '+') {
      return first + second;
    } if (operator === '-') {
      return first - second;
    }
    return first * second;
  };

  const questionArray = [];
  const trueAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const rand1 = Math.floor(Math.random() * 100);
    const rand2 = Math.floor(Math.random() * 100);
    const operator = getRandomOperator();
    questionArray.push(`${rand1} ${operator} ${rand2}`);
    trueAnswers.push(answerTrue(rand1, rand2, operator));
  }

  const name = start.welcomePack();
  welcome(name);

  start.startGame(questionArray, trueAnswers, name);
};

export default startGame;
