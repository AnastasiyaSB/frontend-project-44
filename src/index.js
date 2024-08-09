/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const rounds = 3;

const runEven = (description, createRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = createRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correcr!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEven;
