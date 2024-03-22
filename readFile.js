const fs = require('fs').promises;

async function readFile(FileNames, choice = 'Неправильный выбор!') {
  const data = await fs.readFile(FileNames, 'utf-8');
  return data.split('\r\n\r\n');
}

async function getQA() {
  const qa = await readFile('./topics/raccoon_flashcard_data.txt', 2);
  for (let i = 0; i < qa.length; i += 1) {
    qa[i] = qa[i].trim().split('\r\n');
  }
  return qa;
}

getQA();