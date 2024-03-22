const inquirer = require('inquirer');

/* inquirer

  .prompt([

    {

      name: 'faveReptile',

      message: 'What is your favorite reptile?',
      default: 'Alligators'

    },

  ])

  .then(answers => {

    console.info('Answer:', answers.faveReptile);

  }); */







/* inquirer---------------------------- НЕСКОЛЬКО ВОПРОСОВ СЛЕДОМ

.prompt([

  {

    name: 'faveReptile',

    message: 'What is your favorite reptile?',

    default: 'Alligators'

  },

  {

    name: 'faveColor',

    message: 'What is your favorite color?',

    default: '#008f68'

  },

])

.then(answers => {

  console.info('Answers:', answers);

});
 */





/* inquirer  ------------------ ПРОСТО СПИСОК

  .prompt([

    {

      type: 'list',

      name: 'reptile',

      message: 'Which is better?',

      choices: ['alligator', 'crocodile'],

    },

  ])

  .then(answers => {

    console.info('Answer:', answers.reptile);

  }); */










  /* inquirer   - СПИСОК С ВВОДОМ ИНЛ+ДЕКСА

  .prompt([

    {

      type: 'rawlist',

      name: 'reptile',

      message: 'Which is better?',

      choices: ['alligator', 'crocodile'],

    },

  ])

  .then(answers => {

    console.info('Answer:', answers.reptile);

  }); */









/* inquirer        ------------------- СНАЧАЛА ПОЛЯ ДЛЯ ВВОДА, ЕСЛИ СДЕЛАТЬ ВВОД HELP ТО СПИСОК

  .prompt([

    {

      type: 'expand',

      name: 'reptile',

      message: 'Which is better?',

      choices: [

        {

          key: 'a',

          value: 'alligator',

        },

        {

          key: 'c',

          value: 'crocodile',

        },

      ],

    },

  ])

  .then(answers => {

    console.info('Answer:', answers.reptile);

  }); */










  /* inquirer             ------------------ ВЫБОР НЕСКОЛЬКИХ ВАРИАНТОВ

  .prompt([

    {

      type: 'checkbox',

      name: 'reptiles',

      message: 'Which reptiles do you love?',

      choices: [

        'Alligators', 'Snakes', 'Turtles', 'Lizards',

      ],

    },

  ])

  .then(answers => {

    console.info('Answer:', answers.reptiles);

  }); */





  