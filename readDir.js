const fs = require('fs').promises;

async function readDir() {
const directory = './topics';
const package = await fs.readdir(directory, 'utf-8')

return package;
}




module.exports = readDir;