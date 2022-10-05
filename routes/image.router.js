const imageRouter = require('express').Router();

const { imageController } = require('../controllers');

imageRouter.route('/randomimage')
  .get(imageController.getImage);

module.exports = imageRouter;
