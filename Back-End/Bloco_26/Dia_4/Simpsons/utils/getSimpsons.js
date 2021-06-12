const fs = require('fs/promises');

const getSimpsons = async () => {
  try {
    const simp = await fs.readFile('./utils/simpsons.json');
    return JSON.parse(simp);
  } catch (error) {
    return error;
  };
};

module.exports = getSimpsons;
