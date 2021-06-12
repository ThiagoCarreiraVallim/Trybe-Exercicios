const simpsons = require('./getSimpsons');

const findSimpson = async (id) => {
  try {
    const simpList = await simpsons();
    const simp = simpList.find((simp) => simp.id === id);
    if(simp) {
      return simp;
    } 
    return 'simpson not found';
  } catch (error) {
    return error
  }
};

module.exports = findSimpson;
