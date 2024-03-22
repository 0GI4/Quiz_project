const fs = require('fs').promises;
const inquirer = require('inquirer');
const { getQA } = require('./readFile');

const packageNew = [{ name: 'Ястребы', value: 0 }, { name: 'Еноты', value: 1 }, { name: 'Выдры', value: 2 }];
const directory = './topics'; // Директория с файлами квиза

inquirer.prompt([
  { type: 'input', name: 'username', message: 'Введите имя:' },
  {
    type: 'list',
    name: 'value',
    message: 'Выберите квиз:',
    choices: packageNew,
  },
]).then(async (answer) => {
  // Получаем вопросы и ответы из выбранного квиза
  const qa = await getQA(directory, answer.value);
  console.log( answer.value)
let count = 0
  // Поочередно выводим вопросы и получаем ответы от пользователя
  for (let i = 0; i < qa.length; i++) {
    const question = qa[i][0];
    const correctAnswer = qa[i][1];
    const userAnswer = await inquirer.prompt({ type: 'input', name: 'userAnswer', message: question });
    if(userAnswer === correctAnswer){
     count++
    }else{
     count
    }
    console.log('Ваш ответ:', userAnswer.userAnswer);
    console.log('Правильный ответ:', correctAnswer);
    console.log(count)
    
  }
});
