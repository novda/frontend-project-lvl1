/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const welcomePack = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const inputAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = (answer, trueAnswer) => {
  if (answer === trueAnswer.toString()) {
    return true;
  }
  return false;
};

export const fail = (answer, trueAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
  \nLet's try again, ${name}!`);
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const startGame = (questions, trueAnswers, name) => {
  for (let i = 0; i < 3; i += 1) {
    showQuestion(questions[i]);
    const answer = inputAnswer();
    if (!checkAnswer(answer, trueAnswers[i])) {
      return fail(answer, trueAnswers[i], name);
    }
    console.log('Correct!');
  }
  congratulations(name);
};
