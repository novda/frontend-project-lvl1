/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import welcome from '../src/cli.js';
import * as start from '../src/index.js';

const startGame = () => {
  const getRandomArithmeticProgression = (firstNum, diff, length) => {
    const progressionArray = [];
    for (let i = 0; i < length; i += 1) {
      if (progressionArray.length === 0) {
        progressionArray.push(firstNum);
      } else {
        const num = progressionArray[i - 1] + diff;
        progressionArray.push(num);
      }
    }
    return progressionArray;
  };

  const changeItemToDoublePoints = (items, index) => {
    const copyItems = items;
    copyItems[index] = '..';
    return copyItems;
  };

  const questionArray = [];
  const trueAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const lengthProgression = Math.floor(Math.random() * (11 - 5)) + 5;
    const firstNum = Math.floor(Math.random() * 100);
    const diff = Math.floor(Math.random() * 100);
    const progression = getRandomArithmeticProgression(firstNum, diff, lengthProgression);
    const randomIndex = Math.floor(Math.random() * lengthProgression);
    const answer = progression[randomIndex];
    const newProgression = changeItemToDoublePoints(progression, randomIndex);
    questionArray.push(`${newProgression.join(' ')}`);
    trueAnswers.push(answer);
  }

  const name = start.welcomePack();
  welcome(name);
  console.log('What number is missing in the progression?');
  start.startGame(questionArray, trueAnswers, name);
};

export default startGame;
