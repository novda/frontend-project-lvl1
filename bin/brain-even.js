#!/usr/bin/env node
/* eslint-disable consistent-return */

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import welcome from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
welcome(name);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const checkNumber = (randomNum) => {
  if (randomNum % 2 === 0) {
    return 1;
  }
  if (randomNum % 2 !== 0) {
    return -1;
  }
};

for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if ((checkNumber(randomNumber) === 1 && answer === 'yes') || (checkNumber(randomNumber) === -1 && answer === 'no')) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  } else if (checkNumber(randomNumber) === 1) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (checkNumber(randomNumber) === -1) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
