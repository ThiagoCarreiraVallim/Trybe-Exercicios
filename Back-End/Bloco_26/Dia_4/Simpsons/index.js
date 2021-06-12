const express = require('express');
const routes = require('./routes/index');
const fs = require('fs/promises');

const app = express();

app.use('/', routes);

app.listen(3000, () => {
  console.log('Rodando normalmente na porta 3000');
});
