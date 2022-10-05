const express = require('express');
const path = require('path');
require('dotenv').config();

const { PORT, NODE_ENV } = require('./configs/config');
const { apiRouter } = require('./routes');

const app = express();

if (NODE_ENV !== 'production') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}
try {
  app.use('/static', express.static(path.join(__dirname, 'public')));

  app.use('/api', apiRouter);

  app.use('*', (req, res) => {
    res.status(404).json('Route not fount');
  });
} catch (e) {
  console.log('*********************', e);
}

app.listen(PORT, () => {
  console.log('App listen', PORT);
});
