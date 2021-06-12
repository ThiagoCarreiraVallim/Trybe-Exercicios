const express = require('express');
const bodyParser = require('body-parser');

const getSimpsons = require('../utils/getSimpsons');
const findSimpson = require('../utils/findSimpson');
const addSimpson = require('../utils/addSimpson');
const authorization = require('../midllewares/autorization');
const generateToken = require('../utils/generateToken');

const route = express.Router();

route.use(bodyParser.json());

route.post('/signup', (req, res, next) => {
  const body = req.body;
  console.log(body);
  if(body.email && body.password && body.firstName && body.phone) {
    res.status(200).json({ token: generateToken() });
  } else {
    next({ code: 404, response: 'missing fields'});
  }
});

route.use(authorization);

route.get('/simpsons', async (_req, res, _next) => {
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons);
});

route.get(
  '/simpsons/:id',
  async (req, res, next) => {
    const response = await findSimpson(req.params.id);
    if(!response.id) {
      next({ code: 404, response});
    } else {
      res.status(200).json(response);
    }
  }
);

route.post('/simpsons', async (req, res, next) => {
  const newSimp = req.body;
  const response = await addSimpson(newSimp);
  if(response) {
    next({ code: 409, response});
  } else {
    res.status(200).end();
  }
});

route.use((err, _req, res, _next) => {
  res.status(err.code).json({ message: err.response });
});

module.exports = route;