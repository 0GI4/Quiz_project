const fs = require('fs').promises;
const inquirer = require('inquirer');
const readDir  = require('./readDir');

const packageNew = [{name: 'Ястребы', value:0}, {name: 'Еноты', value:1}, {name: 'Выдры', value:2}]

inquirer.prompt([
  { type: 'input', name: 'username', message: 'Введите имя:' },
  {
    type: 'list',

    name: 'value',

    message: 'Выберите квиз:',

    choices: packageNew,
  },
]).then((answer)=> readFile(readDir, answer.value)) 
