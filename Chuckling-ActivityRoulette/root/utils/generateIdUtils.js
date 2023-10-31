const { v4: uuidv4 } = require('uuid');

function generateGUID() {
  return uuidv4();
}

module.exports = { generateGUID };