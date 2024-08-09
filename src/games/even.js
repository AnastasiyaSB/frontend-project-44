import generationNumber from '../generation.js';
import runEven from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const isEven = (num) => num % 2 === 0;

const createRound = () => {
  const num = generationNumber(minNum, maxNum);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runEven(description, createRound);
};
