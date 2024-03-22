const fs = require('fs').promises;
const inquirer = require('inquirer');
const chalk = require('chalk');
const { getQA } = require('./readFile');

const packageNew = [
  { name: 'Ястребы', value: 0 },
  { name: 'Выдры', value: 1 },
  { name: 'Еноты', value: 2 },
];
const directory = './topics';
inquirer
  .prompt([
    { type: 'input', name: 'username', message: 'Введите имя:', validate(ans){
      if(ans === '') {
        return 'Вы не представились!';
      }
      else 
      return true;
    }},
    {
      type: 'list',
      name: 'value',
      message: 'Выберите квиз:',
      choices: packageNew,
    },
  ])
  .then(async (answer) => {
    const qa = await getQA(directory, answer.value);
    let count = 0;
    for (let i = 0; i < qa.length; i++) {
      const question = qa[i][0];
      const correctAnswer = qa[i][1];

      const userAnswer = await inquirer.prompt({
        type: 'input',
        name: 'userAnswer',
        message: question,
      });
      if (
        userAnswer.userAnswer.trim().toLowerCase() ===
        correctAnswer.trim().toLowerCase()
      ) {
        count++;
      }
      console.log(
        chalk.blue(
          'Ваш ответ:',
          userAnswer.userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
            ? chalk.green(userAnswer.userAnswer.trim())
            : chalk.red(userAnswer.userAnswer.trim())
        )
      );
      process.stdout.write(
        userAnswer.userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
          ? chalk.green(' 👍\n')
          : chalk.red(' 👎\n')
      );
    }
    console.log(
      chalk.bgMagentaBright(
        chalk.bold(`\n ВАШ РЕЗУЛЬТАТ: ${count}/${qa.length} `)
      )
    );
  });
