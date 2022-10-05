const apiRouter = require('express').Router();

const imageRouter = require('./image.router');

apiRouter.use('/', imageRouter);

module.exports = apiRouter;
