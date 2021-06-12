const findSimpson = require('./findSimpson');
const getSimpsons = require('./getSimpsons');
const fs = require('fs/promises');

const addSimpson = async (newSimp) => {
  const simpsons = await getSimpsons();
  const simp = await findSimpson(newSimp.id);
  const newSimpsons = [...simpsons, newSimp]
  if(simp.id) {
    return 'id already exists';
  } else {
    const res = await fs.writeFile('./utils/simpsons.json', JSON.stringify(newSimpsons));
    return res;
  }
};

module.exports = addSimpson;
