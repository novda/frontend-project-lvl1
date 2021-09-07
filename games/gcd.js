/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import welcome from '../src/cli.js';
import * as start from '../src/index.js';

const startGame = () => {
  const gcd = (a, b) => {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  };
  const questionArray = [];
  const trueAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const rand1 = Math.floor(Math.random() * 100);
    const rand2 = Math.floor(Math.random() * 100);
    questionArray.push(`${rand1} ${rand2}`);
    trueAnswers.push(gcd(rand1, rand2));
  }

  const name = start.welcomePack();
  welcome(name);
  console.log('Find the greatest common divisor of given numbers.');
  start.startGame(questionArray, trueAnswers, name);
};

export default startGame;
