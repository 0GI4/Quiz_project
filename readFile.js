const fs = require('fs').promises;

async function readFile(directory, choiceIndex) {
  const package = await fs.readdir(directory, 'utf-8');
  const selectedFileName = package[choiceIndex];
  const data = await fs.readFile(`${directory}/${selectedFileName}`, 'utf-8');
  return data.split('\n\n'); // /r -x2
}

async function getQA(directory, choiceIndex) {
  const qa = await readFile(directory, choiceIndex);
  for (let i = 0; i < qa.length; i += 1) {
    qa[i] = qa[i].trim().split('\n'); // /r -x1
  }
  return qa;
}

module.exports = { readFile, getQA };
